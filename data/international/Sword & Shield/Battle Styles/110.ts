import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [823],
	set: Set,

	name: {
		'en-us': "Corviknight VMAX",
		'fr-fr': "Corvaillus VMAX",
		'es-es': "Corviknight VMAX",
		'it-it': "Corviknight VMAX",
		'pt-br': "Corviknight VMAX",
		'de-de': "Krarmor VMAX"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 320,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Corviknight V",
		'fr-fr': "Corvaillus-V",
		'es-es': "Corviknight V",
		'it-it': "Corviknight-V",
		'pt-br': "Corviknight V",
		'de-de': "Krarmor-V"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Lustrous Body",
			'fr-fr': "Corps Lustré",
			'es-es': "Cuerpo Lustroso",
			'it-it': "Splendicorpo",
			'pt-br': "Corpo Lustroso",
			'de-de': "Glänzender Körper"
		},

		effect: {
			'en-us': "Prevent all effects of your opponent's Pokémon's Abilities done to this Pokémon.",
			'fr-fr': "Évitez tous les effets des talents des Pokémon de votre adversaire infligés à ce Pokémon.",
			'es-es': "Evita todos los efectos de las habilidades de los Pokémon de tu rival infligidos a este Pokémon.",
			'it-it': "Previeni tutti gli effetti delle abilità dei Pokémon del tuo avversario inflitti a questo Pokémon.",
			'pt-br': "Previna todos os efeitos das Habilidades dos Pokémon do seu oponente causados a este Pokémon.",
			'de-de': "Verhindere alle Effekte von Fähigkeiten der Pokémon deines Gegners, die diesem Pokémon zugefügt werden."
		}
	}],

	attacks: [{
		name: {
			'en-us': "G-Max Hurricane",
			'fr-fr': "Vent Violent G-Max",
			'es-es': "Gigavendaval",
			'it-it': "Gigatifone",
			'pt-br': "Furacão G-Max",
			'de-de': "Giga-Orkan"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use G-Max Hurricane.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Vent Violent G-Max.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Gigavendaval.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Gigatifone.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Furacão G-Max.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Giga-Orkan nicht einsetzen."
		},

		damage: 240,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	regulationMark: "E",
	retreat: 0,


	stage: "VMAX",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 545631,
				tcgplayer: 234179
			}
		},
	],
}

export default card
