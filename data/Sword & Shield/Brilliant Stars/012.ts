import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [420],
	set: Set,

	name: {
		en: "Cherubi",
		fr: "Ceribou",
		es: "Cherubi",
		it: "Cherubi",
		pt: "Cherubi",
		de: "Kikugi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Lively Fruit",
			fr: "Fruit Enjoué",
			es: "Fruta Vivaracha",
			it: "Fruttovispo",
			pt: "Fruta Feliz",
			de: "Aufpäppelnde Frucht"
		},

		effect: {
			en: "Prevent all effects of attacks from your opponent's Pokémon done to this Pokémon. (Damage is not an effect.)",
			fr: "Évitez tous les effets d'attaques infligés à ce Pokémon par les Pokémon de votre adversaire. (Les dégâts ne sont pas un effet.)",
			es: "Evita todos los efectos de los ataques de los Pokémon de tu rival infligidos a este Pokémon. (El daño no es un efecto).",
			it: "Previeni tutti gli effetti degli attacchi inflitti a questo Pokémon dai Pokémon del tuo avversario. I danni non sono un effetto.",
			pt: "Previna todos os efeitos de ataques dos Pokémon do seu oponente causados a este Pokémon (dano não é um efeito).",
			de: "Verhindere alle Effekte von Attacken der Pokémon deines Gegners, die diesem Pokémon zugefügt werden. (Schaden ist kein Effekt.)"
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Leafage",
			fr: "Feuillage",
			es: "Follaje",
			it: "Fogliame",
			pt: "Folhagem",
			de: "Blattwerk"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "E",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card