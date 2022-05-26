import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Radiant Greninja",
		fr: "Amphinobi Radieux",
		es: "Greninja Radiante",
		it: "Greninja Lucente",
		pt: "Greninja Radiante",
		de: "Strahlendes Quajutsu"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Concealed Cards",
			fr: "Cartes Dissimulées",
			es: "Cartas Ocultas",
			it: "Carte Nascoste",
			pt: "Cartas na Manga",
			de: "Verborgene Karten"
		},

		effect: {
			en: "You must discard an Energy card from your hand in order to use this Ability. Once during your turn, you may draw 2 cards.",
			fr: "Vous devez défausser une carte Énergie de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher 2 cartes.",
			es: "Debes descartar 1 carta de Energía de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes robar 2 cartas.",
			it: "Devi scartare una carta Energia che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi pescare due carte.",
			pt: "Você deve descartar 1 carta de Energia da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá comprar 2 cartas.",
			de: "Du musst 1 Energiekarte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du 2 Karten ziehen."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Moonlight Shuriken",
			fr: "Shuriken Lune",
			es: "Shuriken Luz Lunar",
			it: "Lame Lunari",
			pt: "Estrela Ninja do Luar",
			de: "Mondschein-Shuriken"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon. This attack does 90 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez 2 Énergies de ce Pokémon. Cette attaque inflige 90 dégâts à 2 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Descarta 2 Energías de este Pokémon. Este ataque hace 90 puntos de daño a 2 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Scarta due Energie da questo Pokémon. Questo attacco infligge 90 danni a due dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Descarte 2 Energias deste Pokémon. Este ataque causa 90 pontos de dano a 2 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 2 Pokémon deines Gegners 90 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card