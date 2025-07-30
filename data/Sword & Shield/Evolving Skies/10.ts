import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Lilligant",
		fr: "Fragilady",
		es: "Lilligant",
		it: "Lilligant",
		pt: "Lilligant",
		de: "Dressella"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	stage: "Stage1",
	illustrator: "Kagemaru Himeno",

	attacks: [{
		name: {
			en: "Dizzying Flower",
			fr: "Fleur Vertigineuse",
			es: "Flor Mareante",
			it: "Stordifiore",
			pt: "Dizzying Flower",
			de: "Schwindelerregende Blume"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Asleep. If tails, your opponent's Active Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Endormi. Si c'est pile, le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Dormido. Si sale cruz, el Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene addormentato. Se esce croce, il Pokémon attivo del tuo avversario viene confuso.",
			pt: "Flip a coin. If heads, your opponent's Active Pokémon is now Asleep. If tails, your opponent's Active Pokémon is now Confused.",
			de: "Wirf 1 Münze. Bei Kopf schläft das Aktive Pokémon deines Gegners jetzt. Bei Zahl ist das Aktive Pokémon deines Gegners jetzt verwirrt."
		},

		damage: 70,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,

	evolveFrom: {
		en: "Petilil",
		fr: "Chlorobule",
		es: "Petilil",
		it: "Petilil",
		pt: "Petilil",
		de: "Lilminip"
	},

	description: {
		en: "It's well liked by other Pokémon because of its beauty. The flower on its head needs constant care, or it will soon wither and rot."
	},

	dexId: [549],
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574034
	}
}

export default card
