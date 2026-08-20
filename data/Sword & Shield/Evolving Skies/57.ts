import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		en: "Emolga",
		fr: "Emolga",
		es: "Emolga",
		it: "Emolga",
		pt: "Emolga",
		de: "Emolga"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",
	illustrator: "Nagomi Nijo",

	attacks: [{
		name: {
			en: "Thunder Shock",
			fr: "Éclair",
			es: "Impactrueno",
			it: "Tuonoshock",
			pt: "Thunder Shock",
			de: "Donnerschock"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 30,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,

	description: {
		en: "As it flies, it scatters electricity around, so bird Pokémon keep their distance. That's why Emolga can keep all its food to itself.",
		de: "Vogel-Pokémon halten sich von ihm fern, da es im Flug Strom entlädt. Frei von Konkurrenz kann es seine Beute so für sich allein beanspruchen."
	},

	dexId: [587],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574081,
				tcgplayer: 246900
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574081,
				tcgplayer: 246900
			}
		},
	],
}

export default card
