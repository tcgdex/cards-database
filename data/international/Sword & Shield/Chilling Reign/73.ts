import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [858],
	set: Set,

	name: {
		'en-us': "Hatterene",
		'fr-fr': "Sorcilence",
		'es-es': "Hatterene",
		'it-it': "Hatterene",
		'pt-br': "Hatterene",
		'de-de': "Silembrim"
	},

	illustrator: "chibi",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Hattrem",
		'fr-fr': "Chapotus",
		'es-es': "Hattrem",
		'it-it': "Hattrem",
		'pt-br': "Hattrem",
		'de-de': "Brimano"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Witch Rondo",
			'fr-fr': "Rondo Envoûtant",
			'es-es': "Rondó de Hechicera",
			'it-it': "Stregarondò",
			'pt-br': "Cântico Bruxo",
			'de-de': "Hexenrondo"
		},

		effect: {
			'en-us': "Once during your turn, you may switch your Active Pokémon with 1 of your Benched Pokémon. If you do, your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez échanger votre Pokémon Actif contre l'un de vos Pokémon de Banc. Dans ce cas, votre adversaire échange son Pokémon Actif contre l'un de ses Pokémon de Banc.",
			'es-es': "Una vez durante tu turno, puedes cambiar tu Pokémon Activo por 1 de tus Pokémon en Banca. Si lo haces, tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
			'it-it': "Una sola volta durante il tuo turno, puoi scambiare il tuo Pokémon attivo con uno della tua panchina. Se lo fai, il tuo avversario scambia il suo Pokémon attivo con uno della sua panchina.",
			'pt-br': "Uma vez durante o seu turno, você poderá trocar o seu Pokémon Ativo por 1 dos seus Pokémon no Banco. Se fizer isto, o seu oponente trocará o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
			'de-de': "Einmal während deines Zuges kannst du dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank austauschen. Wenn du das machst, tauscht dein Gegner sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Psychic",
			'fr-fr': "Psyko",
			'es-es': "Psíquico",
			'it-it': "Psichico",
			'pt-br': "Psíquico",
			'de-de': "Psychokinese"
		},

		effect: {
			'en-us': "This attack does 50 more damage for each Energy attached to your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 50 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 50 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 50 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 50 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 50 Schadenspunkte mehr zu."
		},

		damage: "30+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Stage2",

	description: {
		'en-us': "If you're too loud around it, you risk being torn apart by the claws on its tentacle. This Pokémon is also known as the Forest Witch."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567181,
				tcgplayer: 241734
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567181,
				tcgplayer: 241734
			}
		},
	],
}

export default card
