import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [917],
	set: Set,

	name: {
		fr: "Tissenboule",
		en: "Tarountula",
		es: "Tarountula",
		it: "Tarountula",
		pt: "Tarountula",
		de: "Tarundel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			fr: "Astreinte",
			en: "Bind Down",
			es: "Amarrar",
			it: "Legafermo",
			pt: "Aprisionamento",
			de: "Anbinden"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715489,
				tcgplayer: 497427,
				cardtrader: 248313
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715489,
				tcgplayer: 497427,
				cardtrader: 248313
			}
		},
	],

	illustrator: "Kyoko Umemoto",

	description: {
		en: "The ball of threads wrapped around its body is elastic enough to deflect the scythes of Scyther, this Pokémon's natural enemy.",
	},
}

export default card
