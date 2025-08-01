import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	set: Set,

	name: {
		en: "Radiant Venusaur",
		fr: "Florizarre Radieux",
		es: "Venusaur Radiante",
		it: "Venusaur Lucente",
		pt: "Venusaur Radiante",
		de: "Strahlendes Bisaflor"
	},

	rarity: "Radiant Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Sunny Bloom",
			fr: "Floraison Solaire",
			es: "Floración Soleada",
			it: "Fioritura Solare",
			pt: "Florescer Ensolarado",
			de: "Sonnige Blüte"
		},

		effect: {
			en: "Once at the end of your turn (after your attack), you may use this Ability. Draw cards until you have 4 cards in your hand.",
			fr: "Une fois à la fin de votre tour (après votre attaque), vous pouvez utiliser ce talent. Piochez des cartes jusqu'à en avoir 4 en main.",
			es: "Una vez al final de tu turno (después de tu ataque), puedes usar esta habilidad. Roba cartas hasta que tengas 4 cartas en tu mano.",
			it: "Una sola volta alla fine del tuo turno, dopoil tuo attacco, puoi usare questa abilità. Pesca fino ad avere quattro carte in mano.",
			pt: "Uma vez no final do seu turno (depois do seu ataque), você poderá usar esta Habilidade. Compre cartas até ter 4 cartas na sua mão.",
			de: "Einmal am Ende deines Zuges (nachdem du angegriffen hast) kannst du diese Fähigkeit einsetzen. Ziehe so lange Karten, bis du 4 Karten auf deiner Hand hast."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Pollen Hazard",
			fr: "Pollen Dangereux",
			es: "Polen Nocivo",
			it: "Rischio Polline",
			pt: "Pólen Perigoso",
			de: "Pollengefahr"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned, Confused, and Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé, Confus et Empoisonné.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido, Envenenado y Quemado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato, confuso e avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso, Envenenado e Queimado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt, verwirrt und vergiftet."
		},

		damage: 90
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	},

	thirdParty: {
		cardmarket: 664538
	}
}

export default card
