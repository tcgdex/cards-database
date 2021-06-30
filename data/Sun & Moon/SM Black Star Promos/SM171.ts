import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Flareon-GX",
		fr: "Pyroli-GX",
		es: "Flareon-GX",
		it: "Flareon-GX",
		pt: "Flareon-GX",
		de: "Flamara-GX"
	},
	illustrator: "PLANETA Otani",
	rarity: "Rare",
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
		en: "Eevee",
		fr: "Évoli",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Heat Stage",
				fr: "Étape Chaleur",
				es: "Escenario Ígneo",
				it: "Fase di Fuoco",
				pt: "Etapa de Calor",
				de: "Hitzestufe"
			},
			effect: {
				en: "You may attach up to 3 Fire Energy cards from your hand to your Pokémon in any way you like.",
				fr: "Vous pouvez attacher jusqu’à 3 cartes Énergie Fire de votre main à vos Pokémon, de la manière que vous voulez.",
				es: "Puedes unir hasta 3 cartas de Energía Fire de tu mano a tus Pokémon de la manera que desees.",
				it: "Puoi assegnare a piacimento ai tuoi Pokémon fino a tre carte Energia Fire dalla tua mano.",
				pt: "Você pode ligar até 3 cartas de Energia Fire da sua mão aos seus Pokémon como desejar.",
				de: "Du kannst bis zu 3 Fire-Energiekarten aus deiner Hand beliebig an deine Pokémon anlegen."
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
				en: "Bright Flame",
				fr: "Flamme Éclatante",
				es: "Llama Viva",
				it: "Splendifiamma",
				pt: "Chama Reluzente",
				de: "Helle Flamme"
			},
			effect: {
				en: "Discard 2 Fire Energy from this Pokémon.",
				fr: "Défaussez 2 Énergies Fire de ce Pokémon.",
				es: "Descarta 2 Energías Fire de este Pokémon.",
				it: "Scarta due Energie Fire assegnate a questo Pokémon.",
				pt: "Descarte 2 Energias Fire deste Pokémon.",
				de: "Lege 2 Fire-Energien von diesem Pokémon auf den Ablagestapel."
			},
			damage: 190,

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Power Burner GX",
				fr: "Puissance Brûlante GX",
				es: "Fogón Vigoroso GX",
				it: "Combustione Energetica GX",
				pt: "Queimador Poderoso GX",
				de: "Powerbrenner GX"
			},
			effect: {
				en: "This attack does 20 damage for each Fire Energy card in your discard pile. (You can’t use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 20 dégâts pour chaque carte Énergie Fire dans votre pile de défausse. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Este ataque hace 20 puntos de daño por cada carta de Energía Fire en tu pila de descartes. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Questo attacco infligge 20 danni per ogni carta Energia Fire nella tua pila degli scarti. Non puoi usare più di un attacco GX a partita.",
				pt: "Este ataque causa 20 pontos de dano para cada carta de Energia Fire na sua pilha de descarte (você não pode usar mais de 1 ataque GX por partida).",
				de: "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl der Fire-Energiekarten in deinem Ablagestapel zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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
