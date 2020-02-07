enum Category {
	POKEMON,
	TRAINER,
	ENERGY
}

const en = [
	"Pokémon",
	"Trainer",
	"Energy"
]

const fr = [
	"Pokémon",
	"Dresseur",
	"Énergie"
]

namespace Category {
	export function fromEnglish(str: string) {
		let i = en.indexOf(str)
		if (str === "Pok��mon") i = 1
		if (i < 0) throw new Error(`Cannot get the category (${str})`)
		return i
	}

	export function toLang(i: Category, lang: string): string {
		switch (lang) {
			case "en":
				return en[i]
			case "fr":
				return fr[i]
		}
		throw new Error(`Error, Language not implemented! (${lang})`)
	}
}

export default Category
