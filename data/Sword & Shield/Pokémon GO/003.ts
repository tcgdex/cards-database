import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [3],
	set: Set,

	name: {
		en: "Venusaur",
		fr: "Florizarre",
		es: "Venusaur",
		it: "Venusaur",
		pt: "Venusaur",
		de: "Bisaflor"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Grass"],

	evolveFrom: {
		en: "Ivysaur",
		fr: "Herbizarre",
		es: "Ivysaur",
		it: "Ivysaur",
		pt: "Ivysaur",
		de: "Bisaknosp"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Loopy Lasso",
			fr: "Lasso Troublant",
			es: "Lazo Captura",
			it: "Stordicappio",
			pt: "Laço Zonzo",
			de: "Schwindliges Lasso"
		},

		effect: {
			en: "Once during your turn, you may flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with their Active Pokémon, and the new Active Pokémon is now Asleep and Poisoned.",
			fr: "Une fois pendant votre tour, vous pouvez lancer une pièce. Si c'est face, échangez l'un des Pokémon de Banc de votre adversaire contre son Pokémon Actif, et le nouveau Pokémon Actif est maintenant Endormi et Empoisonné.",
			es: "Una vez durante tu turno, puedes lanzar 1 moneda. Si sale cara, cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo, y el nuevo Pokémon Activo pasa a estar Dormido y Envenenado.",
			it: "Una sola volta durante il tuo turno, puoi lanciare una moneta. Se esce testa, scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo, e il nuovo Pokémon attivo viene addormentato e avvelenato.",
			pt: "Uma vez durante o seu turno, você poderá jogar 1 moeda. Se sair cara, troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a), e o novo Pokémon Ativo ficará Adormecido e Envenenado.",
			de: "Einmal während deines Zuges kannst du 1 Münze werfen. Tausche bei Kopf 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus, und das neue Aktive Pokémon deines Gegners schläft jetzt und ist vergiftet."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless", "Colorless"],

		name: {
			en: "Solar Beam",
			fr: "Lance-Soleil",
			es: "Rayo Solar",
			it: "Solarraggio",
			pt: "Raio Solar",
			de: "Solarstrahl"
		},

		damage: 130
	}],

	retreat: 4,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": true,
		"holo": true
	},

	thirdParty: {
		cardmarket: 664537
	}
}

export default card
