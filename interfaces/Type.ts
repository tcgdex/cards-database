enum Type {
	COLORLESS,
	DARKNESS,
	DRAGON,
	FAIRY,
	FIGHTING,
	FIRE,
	GRASS,
	LIGHTNING,
	METAL,
	PSYCHIC,
	WATER,
}

const en = [
	"Colorless",
	"Darkness",
	"Dragon",
	"Fairy",
	"Fightning",
	"Fire",
	"Grass",
	"Lightning",
	"Metal",
	"Psychic",
	"Water"
]

const fr = [
	"Sans Couleur",
	"Obscurité",
	"Dragon",
	"Fée",
	"Combat",
	"Feu",
	"Plante",
	"Électrique",
	"Métal",
	"Psy",
	"Eau"
]

namespace Type {
	export function toLang(type: Type, lang: string): string {
		switch (lang) {
			case "fr":
				return fr[type]
				break;
			case "en":
				return en[type]
			default:
				break;
		}
		return fr[type]
	}
	export function getFromClass(classe: string): Type {
		switch (classe) {
			case "icon-grass":
				return Type.GRASS
			case "icon-fire":
				return Type.FIRE
			case "icon-water":
				return Type.WATER
			case "icon-lightning":
				return Type.LIGHTNING
			case "icon-psychic":
				return Type.PSYCHIC
			case "icon-fighting":
				return Type.FIGHTING
			case "icon-darkness":
			case "icon-dark":
				return Type.DARKNESS
			case "icon-metal":
				return Type.METAL
			case "icon-colorless":
				return Type.COLORLESS
			case "icon-fairy":
				return Type.FAIRY
			case "icon-dragon":
				return Type.DRAGON
			default:
				throw new Error(`Error, type (${classe}) not found !`)
		}
	}

	export function getFromFrench(fr: string): Type {
		switch (fr.toLowerCase()) {
			case "plante":
				return Type.GRASS
			case "feux":
				return Type.FIRE
			case "eau":
				return Type.WATER
			case "electrique":
				return Type.LIGHTNING
			case "psy":
				return Type.PSYCHIC
			case "combat":
				return Type.FIGHTING
			case "obscurité":
				return Type.DARKNESS
			case "métal":
				return Type.METAL
			case "sanscouleur": // ???
				return Type.COLORLESS
			case "fée":
				return Type.FAIRY
			case "dragon":
				return Type.DRAGON
		}
	}

	export function getFromSpanish(fr: string): Type {
		switch (fr.toLowerCase()) {
			case "planta":
				return Type.GRASS
			case "fuego":
				return Type.FIRE
			case "agua":
				return Type.WATER
			case "rayo":
				return Type.LIGHTNING
			case "psíquica":
				return Type.PSYCHIC
			case "lucha":
				return Type.FIGHTING
			case "oscura":
				return Type.DARKNESS
			case "metálica":
				return Type.METAL
			case "colorless": // ???
				return Type.COLORLESS
			case "hada":
				return Type.FAIRY
			case "dragón":
				return Type.DRAGON
		}
	}

	export function getFromEnglish(en: string): Type {
		return Type.getFromClass(`icon-${en.toLowerCase()}`)
	}
}

export default Type
