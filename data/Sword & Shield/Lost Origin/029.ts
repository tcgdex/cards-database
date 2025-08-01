import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [668],
	set: Set,

	name: {
		en: "Pyroar",
		fr: "Némélios",
		es: "Pyroar",
		it: "Pyroar",
		pt: "Pyroar",
		de: "Pyroleo"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	evolveFrom: {
		en: "Litleo",
		fr: "Hélionceau",
		es: "Litleo",
		it: "Litleo",
		pt: "Litleo",
		de: "Leufeo"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Scorching Aura",
			fr: "Aura Incandescente",
			es: "Aura Candente",
			it: "Aura Ustionante",
			pt: "Aura Flamejante",
			de: "Versengende Aura"
		},

		effect: {
			en: "During Pokémon Checkup, put 4 damage counters on your opponent's Burned Pokémon instead of 2.",
			fr: "Pendant le Contrôle Pokémon, placez 4 marqueurs de dégâts sur le Pokémon Brûlé de votre adversaire au lieu de 2.",
			es: "Durante el Chequeo Pokémon, pon 4 contadores de daño en vez de 2 en el Pokémon Quemado de tu rival.",
			it: "Metti quattro segnalini danno invece di due sui Pokémon bruciati del tuo avversario durante il controllo Pokémon.",
			pt: "Durante o Checape Pokémon, coloque 4 contadores de dano no Pokémon Queimado do seu oponente ao invés de 2.",
			de: "Lege beim Pokémon-Check 4 Schadensmarken anstelle von 2 auf die verbrannten Pokémon deines Gegners."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Fire Fang",
			fr: "Crocs Feu",
			es: "Colmillo Ígneo",
			it: "Rogodenti",
			pt: "Presas de Fogo",
			de: "Feuerzahn"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Burned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Quemado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene bruciato.",
			pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Queimado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt verbrannt."
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": true,
		"holo": true
	},

	thirdParty: {
		cardmarket: 674040
	}
}

export default card
