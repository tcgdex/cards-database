import { Card } from "../../../interfaces"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [461],
	set: Set,

	name: {
		en: "Weavile",
		fr: "Dimoret",
		es: "Weavile",
		it: "Weavile",
		pt: "Weavile",
		de: "Snibunna"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	evolveFrom: {
		en: "Sneasel",
		fr: "Farfuret",
		es: "Sneasel",
		it: "Sneasel",
		pt: "Sneasel",
		de: "Sniebel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Slash",
			fr: "Tranche",
			es: "Cuchillada",
			it: "Lacerazione",
			pt: "Talho",
			de: "Schlitzer"
		},

		damage: 40
	}, {
		cost: ["Water", "Water"],

		name: {
			en: "Hail Claw",
			fr: "Griffe Grêle",
			es: "Garra Granizo",
			it: "Artiglio di Grandine",
			pt: "Garra de Granizo",
			de: "Hagelklaue"
		},

		effect: {
			en: "Discard all Energy from this Pokémon. Your opponent's Active Pokémon is now Paralyzed.",
			fr: "Défaussez toutes les Énergies de ce Pokémon. Le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Descarta todas las Energías de este Pokémon. El Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Scarta tutte le Energie da questo Pokémon. Il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Descarte todas as Energias deste Pokémon. O Pokémon Ativo do seu oponente agora está Paralisado.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel. Das Aktive Pokémon deines Gegners ist jetzt paralysiert."
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "aspara",

	thirdParty: {
		cardmarket: 780904
	}
}

export default card
