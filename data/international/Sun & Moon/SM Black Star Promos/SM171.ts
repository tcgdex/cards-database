import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Flareon GX",
		'fr-fr': "Pyroli GX",
		'es-es': "Flareon GX",
		'it-it': "Flareon GX",
		'pt-br': "Flareon GX",
		'de-de': "Flamara GX"
	},
	illustrator: "PLANETA Otani",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		136,
	],
	hp: 210,
	types: [
		"Fire",
	],
	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Heat Stage",
				'fr-fr': "Étape Chaleur",
				'es-es': "Escenario Ígneo",
				'it-it': "Fase di Fuoco",
				'pt-br': "Etapa de Calor",
				'de-de': "Hitzestufe"
			},
			effect: {
				'en-us': "You may attach up to 3 Fire Energy cards from your hand to your Pokémon in any way you like.",
				'fr-fr': "Vous pouvez attacher jusqu’à 3 cartes Énergie Fire de votre main à vos Pokémon, de la manière que vous voulez.",
				'es-es': "Puedes unir hasta 3 cartas de Energía Fire de tu mano a tus Pokémon de la manera que desees.",
				'it-it': "Puoi assegnare a piacimento ai tuoi Pokémon fino a tre carte Energia Fire dalla tua mano.",
				'pt-br': "Você pode ligar até 3 cartas de Energia Fire da sua mão aos seus Pokémon como desejar.",
				'de-de': "Du kannst bis zu 3 Fire-Energiekarten aus deiner Hand beliebig an deine Pokémon anlegen."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Bright Flame",
				'fr-fr': "Flamme Éclatante",
				'es-es': "Llama Viva",
				'it-it': "Splendifiamma",
				'pt-br': "Chama Reluzente",
				'de-de': "Helle Flamme"
			},
			effect: {
				'en-us': "Discard 2 Fire Energy from this Pokémon.",
				'fr-fr': "Défaussez 2 Énergies Fire de ce Pokémon.",
				'es-es': "Descarta 2 Energías Fire de este Pokémon.",
				'it-it': "Scarta due Energie Fire assegnate a questo Pokémon.",
				'pt-br': "Descarte 2 Energias Fire deste Pokémon.",
				'de-de': "Lege 2 Fire-Energien von diesem Pokémon auf den Ablagestapel."
			},
			damage: 190,

		},
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Power Burner GX",
				'fr-fr': "Puissance Brûlante GX",
				'es-es': "Fogón Vigoroso GX",
				'it-it': "Combustione Energetica GX",
				'pt-br': "Queimador Poderoso GX",
				'de-de': "Powerbrenner GX"
			},
			effect: {
				'en-us': "This attack does 20 damage for each Fire Energy card in your discard pile. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Cette attaque inflige 20 dégâts pour chaque carte Énergie Fire dans votre pile de défausse. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Este ataque hace 20 puntos de daño por cada carta de Energía Fire en tu pila de descartes. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Questo attacco infligge 20 danni per ogni carta Energia Fire nella tua pila degli scarti. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Este ataque causa 20 pontos de dano para cada carta de Energia Fire na sua pilha de descarte (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl der Fire-Energiekarten in deinem Ablagestapel zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: "20×",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
