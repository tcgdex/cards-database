import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Tapu Koko GX",
		'fr-fr': "Tokorico GX",
		'es-es': "Tapu Koko GX",
		'it-it': "Tapu Koko GX",
		'pt-br': "Tapu Koko GX",
		'de-de': "Kapu-Riki GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		785,
	],

	hp: 170,

	types: [
		"Lightning",
	],

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Aero Trail",
				'fr-fr': "Sentier Aérien",
				'es-es': "Rastro Aéreo",
				'it-it': "Aerotraccia",
				'pt-br': "Trilha Aérea",
				'de-de': "Luftspur"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may move any number of Lightning Energy from your other Pokémon to this Pokémon. If you do, switch this Pokémon with your Active Pokémon.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez déplacer autant d’Énergie Lightning que vous voulez de vos autres Pokémon vers ce Pokémon. Dans ce cas, échangez ce Pokémon avec votre Pokémon Actif.",
				'es-es': "Cuando juegues este Pokémon de tu mano a tu Banca durante tu turno, puedes mover cualquier cantidad de Energía Lightning de tus otros Pokémon a este Pokémon. Si lo haces, cambia este Pokémon por tu Pokémon Activo.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi spostare un numero qualsiasi di Energie Lightning assegnate ai tuoi altri Pokémon su questo Pokémon. Se lo fai, scambialo con il tuo Pokémon attivo.",
				'pt-br': "Quando você joga este Pokémon da sua mão para o seu banco durante a sua vez de jogar, você pode mover qualquer número de Energia Lightning de outros Pokémon seus para este Pokémon. Se fizer isto, troque este Pokémon pelo seu Pokémon Ativo.",
				'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du beliebig viele Lightning-Energien von deinen anderen Pokémon auf dieses Pokémon verschieben. Wenn du das machst, tausche dieses Pokémon gegen dein Aktives Pokémon aus."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Sky-High Claws",
				'fr-fr': "Griffes Gratte-Ciel",
				'es-es': "Garras Altísimas",
				'it-it': "Artigli Supremi",
				'pt-br': "Garras Elevadas",
				'de-de': "Himmelhohe Klauen"
			},

			damage: 130,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Tapu Thunder GX",
				'fr-fr': "Toko Tonnerre GX",
				'es-es': "Trueno Tapu GX",
				'it-it': "Taputuono-GX",
				'pt-br': "Trovão Tapu GX",
				'de-de': "Kapu-Donner GX"
			},
			effect: {
				'en-us': "This attack does 50 damage times the amount of Energy attached to all of your opponent’s Pokémon. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Cette attaque inflige 50 dégâts multipliés par le nombre d’Énergies attachées aux Pokémon de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Este ataque hace 50 puntos de daño por cada Energía unida a todos los Pokémon de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Questo attacco infligge 50 danni per ogni Energia assegnata ai Pokémon del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Este ataque causa 50 pontos de dano vezes a quantidade de Energia ligada a todos os Pokémon do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Diese Attacke fügt 50 Schadenspunkte mal der Anzahl der an alle Pokémon deines Gegners angelegten Energien zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: "50×",

		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 297601,
		tcgplayer: 130953
	}
}

export default card
