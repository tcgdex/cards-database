import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [437],
	set: Set,

	name: {
		'en-us': "Bronzong",
		'fr-fr': "Archéodong",
		'es-es': "Bronzong",
		'it-it': "Bronzong",
		'pt-br': "Bronzong",
		'de-de': "Bronzong"
	},

	illustrator: "Shinji Kanda",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Bronzor",
		'fr-fr': "Archéomire",
		'es-es': "Bronzor",
		'it-it': "Bronzor",
		'pt-br': "Bronzor",
		'de-de': "Bronzel"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Heatproof",
			'fr-fr': "Ignifugé",
			'es-es': "Ignífugo",
			'it-it': "Antifuoco",
			'pt-br': "À Prova de Calor",
			'de-de': "Hitzeschutz"
		},

		effect: {
			'en-us': "Prevent all damage done to this Pokémon by attacks from your opponent's Fire Pokémon.",
			'fr-fr': "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon Fire de votre adversaire.",
			'es-es': "Evita todo el daño infligido a este Pokémon por ataques de los Pokémon Fire de tu rival.",
			'it-it': "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Fire del tuo avversario.",
			'pt-br': "Previne todo o dano causado a este Pokémon por ataques dos Pokémon Fire do seu oponente.",
			'de-de': "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Fire-Pokémon deines Gegners zugefügt wird."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'es-es': "Martillear",
			'it-it': "Martello",
			'pt-br': "Martelada",
			'de-de': "Einhämmern"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "Some believe it to be a deity that summons rain clouds. When angered, it lets out a warning cry that rings out like the tolling of a bell.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658773,
				tcgplayer: 272337
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658773,
				tcgplayer: 272337
			}
		},
	],
}

export default card
