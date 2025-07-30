import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Arctovish V",
		fr: "Hydragla V",
		es: "Arctovish V",
		it: "Arctovish V",
		pt: "Arctovish V",
		de: "Pescryodon V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",
	illustrator: "Eske Yoshinob",

	attacks: [{
		name: {
			en: "Ancient Freeze",
			fr: "Givre Ancestral",
			es: "Congelación Ancestral",
			it: "Antico Gelo",
			pt: "Ancient Freeze",
			de: "Uralte Eisstarre"
		},

		effect: {
			en: "If the Defending Pokémon is a Pokémon V or a Pokémon-GX, it can't attack during your opponent's next turn.",
			fr: "Si le Pokémon Défenseur est un Pokémon-V ou un Pokémon-GX, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			es: "Si el Pokémon Defensor es un Pokémon V o un Pokémon-GX, no puede atacar durante el próximo turno de tu rival.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare se è un Pokémon-V o un Pokémon-GX.",
			pt: "If the Defending Pokémon is a Pokémon V or a Pokémon-GX, it can't attack during your opponent's next turn.",
			de: "Wenn das Verteidigende Pokémon ein Pokémon-V oder Pokémon-GX ist, kann es während des nächsten Zuges deines Gegners nicht angreifen."
		},

		damage: 80,
		cost: ["Water", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Giga Impact",
			fr: "Giga Impact",
			es: "Gigaimpacto",
			it: "Gigaimpatto",
			pt: "Giga Impact",
			de: "Gigastoß"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "During your next turn, this Pokémon can't attack.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 220,
		cost: ["Water", "Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	dexId: [883],
	regulationMark: "E",
	suffix: "V",

	thirdParty: {
		cardmarket: 574072
	}
}

export default card
