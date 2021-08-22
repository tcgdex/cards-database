import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Ampharos GX",
		fr: "Pharamp GX",
		es: "Ampharos GX",
		it: "Ampharos GX",
		pt: "Ampharos GX",
		de: "Ampharos GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		181,
	],
	hp: 240,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Flaaffy",
		fr: "Lainergie",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Power Recharge",
				fr: "Recharge Puissance",
				es: "Recarga de Poder",
				it: "Ricarica di Potenza",
				pt: "Recarga de Poder",
				de: "Kraftzufuhr"
			},
			effect: {
				en: "Put all Electropower cards from your discard pile into your hand.",
				fr: "Placez toutes les cartes Électropuissance de votre pile de défausse dans votre main.",
				es: "Pon todas las cartas de Electropoder de tu pila de descartes en tu mano.",
				it: "Prendi tutte le carte Potenziatore Elettrico dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
				pt: "Coloque todas as cartas Eletropoder da sua pilha de descarte na sua mão.",
				de: "Nimm alle Elektrokraft-Karten aus deinem Ablagestapel auf deine Hand."
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Impact Bolt",
				fr: "Frappe Éclair",
				es: "Relámpago Impacto",
				it: "Lampoimpatto",
				pt: "Raio de Impacto",
				de: "Druckblitz"
			},
			effect: {
				en: "Discard all Lightning Energy from this Pokémon.",
				fr: "Défaussez toute l’Énergie Lightning de ce Pokémon.",
				es: "Descarta todas las Energías Lightning de este Pokémon.",
				it: "Scarta tutte le Energie Lightning assegnate a questo Pokémon.",
				pt: "Descarte todas as Energias Lightning deste Pokémon.",
				de: "Lege alle Lightning-Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 150,

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Electrical GX",
				fr: "Électricité GX",
				es: "Eléctrico GX",
				it: "Scossa GX",
				pt: "Carga Elétrica GX",
				de: "Elektrisch GX"
			},
			effect: {
				en: "Search your deck for up to 7 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck. (You can’t use more than 1 GX attack in a game.)",
				fr: "Cherchez jusqu’à 7 Pokémon dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Busca en tu baraja hasta 7 Pokémon, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Cerca nel tuo mazzo fino a sette Pokémon, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo. Non puoi usare più di un attacco GX a partita.",
				pt: "Procure por até 7 Pokémon no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho (você não pode usar mais de 1 ataque GX por partida).",
				de: "Durchsuche dein Deck nach bis zu 7 Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
