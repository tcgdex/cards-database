import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		en: "Greninja ex",
		fr: "Amphinobi-ex",
		es: "Greninja ex",
		it: "Greninja-ex",
		pt: "Greninja ex",
		de: "Quajutsu-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 310,
	types: ["Fighting"],
	stage: "Stage2",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Shinobi Blade",
			fr: "Lame Shinobi",
			es: "Tajo Shinobi",
			it: "Lama dello Shinobi",
			pt: "Espada Ninja",
			de: "Shinobi-Klinge"
		},

		effect: {
			en: "You may search your deck for a card and put it into your hand. Then, shuffle your deck.",
			fr: "Vous pouvez chercher dans votre deck une carte, puis l'ajouter à votre main. Mélangez ensuite votre deck.",
			es: "Puedes buscar en tu baraja 1 carta y ponerla en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Puoi cercare nel tuo mazzo una carta e aggiungerla a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Você pode procurar por uma carta no seu baralho e colocá-la na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Du kannst dein Deck nach 1 Karte durchsuchen und sie auf deine Hand nehmen. Mische anschließend dein Deck."
		},

		damage: 170
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Mirage Barrage",
			fr: "Salve Mirage",
			es: "Ráfaga Espejismo",
			it: "Rafficamiraggio",
			pt: "Barricada de Miragem",
			de: "Illusionsoffensive"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon. This attack does 120 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez 2 Énergies de ce Pokémon. Cette attaque inflige 120 dégâts à 2 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Descarta 2 Energías de este Pokémon. Este ataque hace 120 puntos de daño a 2 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Scarta due Energie da questo Pokémon. Questo attacco infligge 120 danni a due dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Descarte 2 Energias deste Pokémon. Este ataque causa 120 pontos de dano a 2 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 2 Pokémon deines Gegners 120 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "5ban Graphics",

	thirdParty: {
		cardmarket: 769280
	}
}

export default card