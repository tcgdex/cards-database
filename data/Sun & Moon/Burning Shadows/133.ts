import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Tapu Fini GX",
		fr: "Tokopisco GX",
		es: "Tapu Fini GX",
		it: "Tapu Fini GX",
		pt: "Tapu Fini GX",
		de: "Kapu-Kime GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
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
				en: "Aqua Ring",
				fr: "Anneau Hydro",
				es: "Acua Aro",
				it: "Acquanello",
				pt: "Aqua Arco",
				de: "Wasserring"
			},
			effect: {
				en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Vous pouvez échanger ce Pokémon avec l’un de vos Pokémon de Banc.",
				es: "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Puoi scambiare questo Pokémon con uno della tua panchina.",
				pt: "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
				de: "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
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
				en: "Hydro Shot",
				fr: "Hydro-Coup",
				es: "Hidrodisparo",
				it: "Idrocolpo",
				pt: "Hidrodisparo",
				de: "Hydroschuss"
			},
			effect: {
				en: "Discard 2 Water Energy from this Pokémon. This attack does 120 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez 2 Énergies Water de ce Pokémon. Cette attaque inflige 120 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Descarta 2 Energías Water de este Pokémon. Este ataque hace 120 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Scarta due Energie Water assegnate a questo Pokémon. Questo attacco infligge 120 danni a uno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Descarte 2 Energias Water deste Pokémon. Este ataque causa 120 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Lege 2 Water-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 1 Pokémon deines Gegners 120 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Tapu Storm GX",
				fr: "Toko Tempête GX",
				es: "Tormenta Tapu GX",
				it: "Taputempesta-GX",
				pt: "Tempestade Tapu GX",
				de: "Kapu-Sturm GX"
			},
			effect: {
				en: "Shuffle your opponent’s Active Pokémon and all cards attached to it into their deck. If your opponent has no Benched Pokémon, this attack does nothing. (You can’t use more than 1 GX attack in a game.)",
				fr: "Mélangez le Pokémon Actif de votre adversaire et toutes les cartes qui lui sont attachées dans son deck. Si votre adversaire n’a aucun Pokémon de Banc, cette attaque ne fait rien. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Pon el Pokémon Activo de tu rival y todas las cartas unidas a él en su baraja y barájalas todas. Si tu rival no tiene ningún Pokémon en Banca, este ataque no hace nada. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Rimischia il Pokémon attivo del tuo avversario e tutte le carte a esso assegnate nel suo mazzo. Se il tuo avversario non ha Pokémon in panchina, questo attacco non ha effetto. Non puoi usare più di un attacco GX a partita.",
				pt: "Embaralhe o Pokémon Ativo do seu oponente e todas as cartas ligadas a ele no baralho do seu oponente. Se o seu oponente não possuir Pokémon no Banco, este ataque não fará nada (você não pode usar mais de 1 ataque GX por partida).",
				de: "Mische das Aktive Pokémon deines Gegners und alle an es angelegten Karten in sein Deck. Wenn dein Gegner keine Pokémon auf der Bank hat, hat diese Attacke keine Auswirkungen. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 298780,
		tcgplayer: 138520
	}
}

export default card
