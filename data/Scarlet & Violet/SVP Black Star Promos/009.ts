import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [918],
	set: Set,

	name: {
		en: "Spidops",
		fr: "Filentrappe",
		es: "Spidops",
		it: "Spidops",
		pt: "Spidops",
		de: "Spinsidias"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	evolveFrom: {
		en: "Tarountula",
		fr: "Tissenboule",
		es: "Tarountula",
		it: "Tarountula",
		pt: "Tarountula",
		de: "Tarundel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "String Truss",
			fr: "Ligotage Filaire",
			es: "Sujeción Hilo",
			it: "Legafilo",
			pt: "Suporte de Fio",
			de: "Fadenwickel"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Jet Headbutt",
			fr: "Bélier Volant",
			es: "Turbocabezazo",
			it: "Zuccata Jet",
			pt: "Cabeçada a Jato",
			de: "Flinke Kopfnuss"
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "G",
	illustrator: "Anesaki Dynamic"
}

export default card