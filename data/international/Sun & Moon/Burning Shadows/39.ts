import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Tapu Fini GX",
		'fr-fr': "Tokopisco GX",
		'es-es': "Tapu Fini GX",
		'it-it': "Tapu Fini GX",
		'pt-br': "Tapu Fini GX",
		'de-de': "Kapu-Kime GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		788,
	],

	hp: 170,

	types: [
		"Water",
	],

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Aqua Ring",
				'fr-fr': "Anneau Hydro",
				'es-es': "Acua Aro",
				'it-it': "Acquanello",
				'pt-br': "Aqua Arco",
				'de-de': "Wasserring"
			},
			effect: {
				'en-us': "You may switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Vous pouvez échanger ce Pokémon avec l’un de vos Pokémon de Banc.",
				'es-es': "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
				'it-it': "Puoi scambiare questo Pokémon con uno della tua panchina.",
				'pt-br': "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
				'de-de': "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Hydro Shot",
				'fr-fr': "Hydro-Coup",
				'es-es': "Hidrodisparo",
				'it-it': "Idrocolpo",
				'pt-br': "Hidrodisparo",
				'de-de': "Hydroschuss"
			},
			effect: {
				'en-us': "Discard 2 Water Energy from this Pokémon. This attack does 120 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Défaussez 2 Énergies Water de ce Pokémon. Cette attaque inflige 120 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Descarta 2 Energías Water de este Pokémon. Este ataque hace 120 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Scarta due Energie Water assegnate a questo Pokémon. Questo attacco infligge 120 danni a uno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Descarte 2 Energias Water deste Pokémon. Este ataque causa 120 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Lege 2 Water-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 1 Pokémon deines Gegners 120 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Tapu Storm GX",
				'fr-fr': "Toko Tempête GX",
				'es-es': "Tormenta Tapu GX",
				'it-it': "Taputempesta-GX",
				'pt-br': "Tempestade Tapu GX",
				'de-de': "Kapu-Sturm GX"
			},
			effect: {
				'en-us': "Shuffle your opponent’s Active Pokémon and all cards attached to it into their deck. If your opponent has no Benched Pokémon, this attack does nothing. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Mélangez le Pokémon Actif de votre adversaire et toutes les cartes qui lui sont attachées dans son deck. Si votre adversaire n’a aucun Pokémon de Banc, cette attaque ne fait rien. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Pon el Pokémon Activo de tu rival y todas las cartas unidas a él en su baraja y barájalas todas. Si tu rival no tiene ningún Pokémon en Banca, este ataque no hace nada. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Rimischia il Pokémon attivo del tuo avversario e tutte le carte a esso assegnate nel suo mazzo. Se il tuo avversario non ha Pokémon in panchina, questo attacco non ha effetto. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Embaralhe o Pokémon Ativo do seu oponente e todas as cartas ligadas a ele no baralho do seu oponente. Se o seu oponente não possuir Pokémon no Banco, este ataque não fará nada (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Mische das Aktive Pokémon deines Gegners und alle an es angelegten Karten in sein Deck. Wenn dein Gegner keine Pokémon auf der Bank hat, hat diese Attacke keine Auswirkungen. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 298780,
		tcgplayer: 138519
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
