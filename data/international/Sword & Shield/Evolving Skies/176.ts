import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Arctovish V",
		'fr-fr': "Hydragla V",
		'es-es': "Arctovish V",
		'it-it': "Arctovish V",
		'pt-br': "Arctovish V",
		'de-de': "Pescryodon V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",
	illustrator: "Eske Yoshinob",

	attacks: [{
		name: {
			'en-us': "Ancient Freeze",
			'fr-fr': "Givre Ancestral",
			'es-es': "Congelación Ancestral",
			'it-it': "Antico Gelo",
			'pt-br': "Ancient Freeze",
			'de-de': "Uralte Eisstarre"
		},

		effect: {
			'en-us': "If the Defending Pokémon is a Pokémon V or a Pokémon-GX, it can't attack during your opponent's next turn.",
			'fr-fr': "Si le Pokémon Défenseur est un Pokémon-V ou un Pokémon-GX, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			'es-es': "Si el Pokémon Defensor es un Pokémon V o un Pokémon-GX, no puede atacar durante el próximo turno de tu rival.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare se è un Pokémon-V o un Pokémon-GX.",
			'pt-br': "If the Defending Pokémon is a Pokémon V or a Pokémon-GX, it can't attack during your opponent's next turn.",
			'de-de': "Wenn das Verteidigende Pokémon ein Pokémon-V oder Pokémon-GX ist, kann es während des nächsten Zuges deines Gegners nicht angreifen."
		},

		damage: 80,
		cost: ["Water", "Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Giga Impact",
			'fr-fr': "Giga Impact",
			'es-es': "Gigaimpacto",
			'it-it': "Gigaimpatto",
			'pt-br': "Giga Impact",
			'de-de': "Gigastoß"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "During your next turn, this Pokémon can't attack.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
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

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574234,
				tcgplayer: 246761
			}
		},
	],
}

export default card
