'use strict'

export const productApp = () => {
	const productsEl = document.querySelector('[ap-products]')

	const fetchProducts = async () => {
		try {
			const response = await fetch('https://dummyjson.com/products')

			if (!response.ok) {
				throw new Error(`HTTP ${response.status}`)
			}

			const data = await response.json()

			renderProducts(data.products)
		} catch (error) {
			console.log(error)
		}
	}

	fetchProducts()

	const renderProducts = (products) => {
		products.forEach(product => {
			const productHtml = `
				<div
					class="ap-product overflow-hidden rounded-md bg-white border"
					id="${product.id}"
					ap-product
				>
					<figure class="ap-product__thumbnail border-b border-blue-50">
						<img
							class="ap-product__img aspect-square w-full object-contain"
							src="${product.thumbnail}"
							alt="${product.title}"
						>
					</figure>

					<div class="ap-product__content py-3 px-3.5">
						<h3 class="
							ap-product__title text-lg font-medium leading-tight
							xl:text-base
							2xl:text-lg
						">
							${product.title}
						</h3>

						<div class="flex flex-wrap gap-5 justify-between items-center mt-4">
							<p class="ap-product__price leading-tight">
								<span>$</span>${product.price}
							</p>

							<button
								class="ap-product__add-to-cart-btn w-fit flex items-center justify-center px-2 py-0.5 bg-yellow-300 text-gray-800 rounded uppercase"
								type="button"
								ap-product-cart-btn
							>
								Add to cart
							</button>
						</div>

					</div>
				</div>
			`

			productsEl.insertAdjacentHTML('beforeend', productHtml)
		});
	}
}
