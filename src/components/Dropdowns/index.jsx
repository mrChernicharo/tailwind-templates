/* This example requires Tailwind CSS v2.0+ */

function Dropdown() {
	return (
		<div class="relative inline-block text-left">
			<div>
				<button
					type="button"
					class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
					id="menu-button"
					aria-expanded="true"
					aria-haspopup="true">
					Options
					<svg
						class="-mr-1 ml-2 h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true">
						<path
							fill-rule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
			</div>

			{/* <!--
        Dropdown menu, show/hide based on menu state.
    
        Entering: "transition ease-out duration-100"
          From: "transform opacity-0 scale-95"
          To: "transform opacity-100 scale-100"
        Leaving: "transition ease-in duration-75"
          From: "transform opacity-100 scale-100"
          To: "transform opacity-0 scale-95"
      --> */}
			<div
				class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
				role="menu"
				aria-orientation="vertical"
				aria-labelledby="menu-button"
				tabindex="-1">
				<div class="py-1" role="none">
					{/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
					<a
						href="#"
						class="text-gray-700 block px-4 py-2 text-sm"
						role="menuitem"
						tabindex="-1"
						id="menu-item-0">
						Account settings
					</a>
					<a
						href="#"
						class="text-gray-700 block px-4 py-2 text-sm"
						role="menuitem"
						tabindex="-1"
						id="menu-item-1">
						Support
					</a>
					<a
						href="#"
						class="text-gray-700 block px-4 py-2 text-sm"
						role="menuitem"
						tabindex="-1"
						id="menu-item-2">
						License
					</a>
					<form method="POST" action="#" role="none">
						<button
							type="submit"
							class="text-gray-700 block w-full text-left px-4 py-2 text-sm"
							role="menuitem"
							tabindex="-1"
							id="menu-item-3">
							Sign out
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

function DropdownWithDividers() {
	return (
		<div class="relative inline-block text-left">
			<div>
				<button
					type="button"
					class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
					id="menu-button"
					aria-expanded="true"
					aria-haspopup="true">
					Options
					{/* <!-- Heroicon name: solid/chevron-down --> */}
					<svg
						class="-mr-1 ml-2 h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true">
						<path
							fill-rule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
			</div>

			{/* <!--
            Dropdown menu, show/hide based on menu state.
        
            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
			<div
				class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
				role="menu"
				aria-orientation="vertical"
				aria-labelledby="menu-button"
				tabindex="-1">
				<div class="py-1" role="none">
					{/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
					<a
						href="#"
						class="text-gray-700 block px-4 py-2 text-sm"
						role="menuitem"
						tabindex="-1"
						id="menu-item-0">
						Edit
					</a>
					<a
						href="#"
						class="text-gray-700 block px-4 py-2 text-sm"
						role="menuitem"
						tabindex="-1"
						id="menu-item-1">
						Duplicate
					</a>
				</div>
				<div class="py-1" role="none">
					<a
						href="#"
						class="text-gray-700 block px-4 py-2 text-sm"
						role="menuitem"
						tabindex="-1"
						id="menu-item-2">
						Archive
					</a>
					<a
						href="#"
						class="text-gray-700 block px-4 py-2 text-sm"
						role="menuitem"
						tabindex="-1"
						id="menu-item-3">
						Move
					</a>
				</div>
				<div class="py-1" role="none">
					<a
						href="#"
						class="text-gray-700 block px-4 py-2 text-sm"
						role="menuitem"
						tabindex="-1"
						id="menu-item-4">
						Share
					</a>
					<a
						href="#"
						class="text-gray-700 block px-4 py-2 text-sm"
						role="menuitem"
						tabindex="-1"
						id="menu-item-5">
						Add to favorites
					</a>
				</div>
				<div class="py-1" role="none">
					<a
						href="#"
						class="text-gray-700 block px-4 py-2 text-sm"
						role="menuitem"
						tabindex="-1"
						id="menu-item-6">
						Delete
					</a>
				</div>
			</div>
		</div>
	);
}

function DropdownWithImages() {
	return (
		// <!-- This example requires Tailwind CSS v2.0+ -->
		<div>
			<label id="listbox-label" class="block text-sm font-medium text-gray-700">
				{" "}
				Assigned to{" "}
			</label>
			<div class="mt-1 relative">
				<button
					type="button"
					class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					aria-haspopup="listbox"
					aria-expanded="true"
					aria-labelledby="listbox-label">
					<span class="flex items-center">
						<img
							src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt=""
							class="flex-shrink-0 h-6 w-6 rounded-full"
						/>
						<span class="ml-3 block truncate"> Tom Cook </span>
					</span>
					<span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
						{/* <!-- Heroicon name: solid/selector --> */}
						<svg
							class="h-5 w-5 text-gray-400"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
					</span>
				</button>

				{/* <!--
      Select popover, show/hide based on select state.

      Entering: ""
        From: ""
        To: ""
      Leaving: "transition ease-in duration-100"
        From: "opacity-100"
        To: "opacity-0"
    --> */}
				<ul
					class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
					tabindex="-1"
					role="listbox"
					aria-labelledby="listbox-label"
					aria-activedescendant="listbox-option-3">
					{/* <!--
        Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

        Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
      --> */}
					<li
						class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
						id="listbox-option-0"
						role="option">
						<div class="flex items-center">
							<img
								src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=""
								class="flex-shrink-0 h-6 w-6 rounded-full"
							/>
							{/* <!-- Selected: "font-semibold", Not Selected: "font-normal" --> */}
							<span class="font-normal ml-3 block truncate">
								{" "}
								Wade Cooper{" "}
							</span>
						</div>
						{/* 
        <!--
          Checkmark, only display for selected option.

          Highlighted: "text-white", Not Highlighted: "text-indigo-600"
        --> */}
						<span class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
							{/* <!-- Heroicon name: solid/check --> */}
							<svg
								class="h-5 w-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
						</span>
					</li>

					{/* <!-- More items... --> */}
				</ul>
			</div>
		</div>
	);
}

export { Dropdown, DropdownWithDividers, DropdownWithImages };
