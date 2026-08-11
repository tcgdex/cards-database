import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Ampharos GX",
		'fr-fr': "Pharamp GX",
		'es-es': "Ampharos GX",
		'it-it': "Ampharos GX",
		'pt-br': "Ampharos GX",
		'de-de': "Ampharos GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
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
		'en-us': "Flaaffy",
		'fr-fr': "Lainergie",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Power Recharge",
				'fr-fr': "Recharge Puissance",
				'es-es': "Recarga de Poder",
				'it-it': "Ricarica di Potenza",
				'pt-br': "Recarga de Poder",
				'de-de': "Kraftzufuhr"
			},
			effect: {
				'en-us': "Put all Electropower cards from your discard pile into your hand.",
				'fr-fr': "Placez toutes les cartes Électropuissance de votre pile de défausse dans votre main.",
				'es-es': "Pon todas las cartas de Electropoder de tu pila de descartes en tu mano.",
				'it-it': "Prendi tutte le carte Potenziatore Elettrico dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
				'pt-br': "Coloque todas as cartas Eletropoder da sua pilha de descarte na sua mão.",
				'de-de': "Nimm alle Elektrokraft-Karten aus deinem Ablagestapel auf deine Hand."
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Impact Bolt",
				'fr-fr': "Frappe Éclair",
				'es-es': "Relámpago Impacto",
				'it-it': "Lampoimpatto",
				'pt-br': "Raio de Impacto",
				'de-de': "Druckblitz"
			},
			effect: {
				'en-us': "Discard all Lightning Energy from this Pokémon.",
				'fr-fr': "Défaussez toute l’Énergie Lightning de ce Pokémon.",
				'es-es': "Descarta todas las Energías Lightning de este Pokémon.",
				'it-it': "Scarta tutte le Energie Lightning assegnate a questo Pokémon.",
				'pt-br': "Descarte todas as Energias Lightning deste Pokémon.",
				'de-de': "Lege alle Lightning-Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 150,

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Electrical GX",
				'fr-fr': "Électricité GX",
				'es-es': "Eléctrico GX",
				'it-it': "Scossa GX",
				'pt-br': "Carga Elétrica GX",
				'de-de': "Elektrisch GX"
			},
			effect: {
				'en-us': "Search your deck for up to 7 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Cherchez jusqu’à 7 Pokémon dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Busca en tu baraja hasta 7 Pokémon, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Cerca nel tuo mazzo fino a sette Pokémon, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Procure por até 7 Pokémon no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Durchsuche dein Deck nach bis zu 7 Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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

	thirdParty: {
		cardmarket: 369110,
		tcgplayer: 183818
	}
}

export default card
