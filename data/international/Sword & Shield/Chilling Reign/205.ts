import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [898],
	set: Set,

	name: {
		'en-us': "Shadow Rider Calyrex VMAX",
		'fr-fr': "Sylveroy Cavalier d'Effroi VMAX",
		'es-es': "Calyrex Jinete Espectral VMAX",
		'it-it': "Calyrex Cavaliere Spettrale VMAX",
		'pt-br': "Calyrex Cavaleiro Espectral VMAX",
		'de-de': "Rappenreiter-Coronospa VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Psychic"],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Underworld Door",
			'fr-fr': "Porte des Abîmes",
			'es-es': "Puerta del Inframundo",
			'it-it': "Portale Sottomondo",
			'pt-br': "Portão do Submundo",
			'de-de': "Tür zur Unterwelt"
		},

		effect: {
			'en-us': "Once during your turn, you may attach a Psychic Energy card from your hand to 1 of your Benched Psychic Pokémon. If you attached Energy to a Pokémon in this way, draw 2 cards.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez attacher une carte Énergie Psychic de votre main à l'un de vos Pokémon Psychic de Banc. Si vous avez attaché de l'Énergie à un Pokémon de cette façon, piochez 2 cartes.",
			'es-es': "Una vez durante tu turno, puedes unir 1 carta de Energía Psychic de tu mano a 1 de tus Pokémon Psychic en Banca. Si has unido Energía a un Pokémon de esta manera, roba 2 cartas.",
			'it-it': "Una sola volta durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon Psychic in panchina una carta Energia Psychic dalla tua mano. Se hai assegnato dell'Energia a un Pokémon in questo modo, pesca due carte.",
			'pt-br': "Uma vez durante o seu turno, você poderá ligar 1 carta de Energia Psychic da sua mão a 1 dos seus Pokémon Psychic no Banco. Se você ligou Energia a um Pokémon desta forma, compre 2 cartas.",
			'de-de': "Einmal während deines Zuges kannst du 1 Psychic-Energiekarte aus deiner Hand an 1 Psychic-Pokémon auf deiner Bank anlegen. Wenn du auf diese Weise Energie an ein Pokémon angelegt hast, ziehe 2 Karten."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Max Geist",
			'fr-fr': "Spiritomax",
			'es-es': "Maxiespíritu",
			'it-it': "Dynaspirito",
			'pt-br': "Assombração Max",
			'de-de': "Dyna-Geist"
		},

		damage: "10+",

		effect: {
			'en-us': "This attack does 30 more damage for each Psychic Energy attached to all of your Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Psychic attachée à tous vos Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Energía Psychic unida a todos tus Pokémon.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Energia Psychic assegnata ai tuoi Pokémon.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia Psychic ligada a todos os seus Pokémon.",
			'de-de': "Diese Attacke fügt für jede an alle deine Pokémon angelegte Psychic-Energie 30 Schadenspunkte mehr zu."
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,


	stage: "VMAX",
	illustrator: "Mitsuhiro Arita",

	evolveFrom: {
		'en-us': "Shadow Rider Calyrex V",
		'fr-fr': "Sylveroy Cavalier d'Effroi-V",
		'es-es': "Calyrex Jinete Espectral V",
		'it-it': "Calyrex Cavaliere Spettrale-V",
		'pt-br': "Calyrex Cavaleiro Espectral V",
		'de-de': "Rappenreiter-Coronospa-V"
	},

	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567313,
				tcgplayer: 241740
			}
		},
	],
}

export default card
