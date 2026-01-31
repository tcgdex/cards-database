import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Weavile",
		fr: "Dimoret",
		es: "Weavile",
		'es-mx': "Weavile",
		de: "Snibunna",
		it: "Weavile",
		pt: "Weavile"
	},

	illustrator: "aspara",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Slash",
			fr: "Tranche",
			es: "Cuchillada",
			'es-mx': "Cuchillada",
			de: "Schlitzer",
			it: "Lacerazione",
			pt: "Talho"
		},

		damage: 40
	}, {
		cost: ["Water", "Water"],

		name: {
			en: "Hail Claw",
			fr: "Griffe Grêle",
			es: "Garra Granizo",
			'es-mx': "Garra Granizo",
			de: "Hagelklaue",
			it: "Artiglio di Grandine",
			pt: "Garra de Granizo"
		},

		effect: {
			en: "Discard all Energy from this Pokémon. Your opponent's Active Pokémon is now Paralyzed.",
			fr: "Défaussez toutes les Énergies de ce Pokémon. Le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Descarta todas las Energías de este Pokémon. El Pokémon Activo de tu rival pasa a estar Paralizado.",
			'es-mx': "Descarta todas las Energías de este Pokémon. El Pokémon Activo de tu rival ahora está Paralizado.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel. Das Aktive Pokémon deines Gegners ist jetzt paralysiert.",
			it: "Scarta tutte le Energie da questo Pokémon. Il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Descarte todas as Energias deste Pokémon. O Pokémon Ativo do seu oponente agora está Paralisado."
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		tcgplayer: 675857,
		cardmarket: 869656
	}
}

export default card