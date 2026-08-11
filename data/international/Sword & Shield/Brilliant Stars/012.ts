import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [420],
	set: Set,

	name: {
		'en-us': "Cherubi",
		'fr-fr': "Ceribou",
		'es-es': "Cherubi",
		'it-it': "Cherubi",
		'pt-br': "Cherubi",
		'de-de': "Kikugi"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Lively Fruit",
			'fr-fr': "Fruit Enjoué",
			'es-es': "Fruta Vivaracha",
			'it-it': "Fruttovispo",
			'pt-br': "Fruta Feliz",
			'de-de': "Aufpäppelnde Frucht"
		},

		effect: {
			'en-us': "Prevent all effects of attacks from your opponent's Pokémon done to this Pokémon. (Damage is not an effect.)",
			'fr-fr': "Évitez tous les effets d'attaques infligés à ce Pokémon par les Pokémon de votre adversaire. (Les dégâts ne sont pas un effet.)",
			'es-es': "Evita todos los efectos de los ataques de los Pokémon de tu rival infligidos a este Pokémon. (El daño no es un efecto).",
			'it-it': "Previeni tutti gli effetti degli attacchi inflitti a questo Pokémon dai Pokémon del tuo avversario. I danni non sono un effetto.",
			'pt-br': "Previna todos os efeitos de ataques dos Pokémon do seu oponente causados a este Pokémon (dano não é um efeito).",
			'de-de': "Verhindere alle Effekte von Attacken der Pokémon deines Gegners, die diesem Pokémon zugefügt werden. (Schaden ist kein Effekt.)"
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Leafage",
			'fr-fr': "Feuillage",
			'es-es': "Follaje",
			'it-it': "Fogliame",
			'pt-br': "Folhagem",
			'de-de': "Blattwerk"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",


	description: {
		'en-us': "The deeper a Cherubi's red, the more nutrients it has stockpiled in its body. And the sweeter and tastier its small ball!",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608436,
				tcgplayer: 263606
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608436,
				tcgplayer: 263606
			}
		},
	],
}

export default card
