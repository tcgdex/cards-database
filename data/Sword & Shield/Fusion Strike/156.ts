import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [94],
	set: Set,

	name: {
		en: "Gengar V",
		fr: "Ectoplasma V",
		es: "Gengar V",
		it: "Gengar V",
		pt: "Gengar V",
		de: "Gengar V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",
	retreat: 2,
	regulationMark: "E",
	illustrator: "5ban Graphics",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Dark Slumber",
			fr: "Sommeil Obscur",
			de: "Dunkler Schlummer",
			es: "Letargo Oscuro",
			pt: "Sono Sombrio",
			it: "Sonno Oscuro"
		},

		damage: 40,

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato."
		}
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			en: "Pain Explosion",
			fr: "Explosion de Douleur",
			de: "Schmerzexplosion",
			es: "Explosión de Dolor",
			pt: "Explosão de Dor",
			it: "Esplosione Infausta"
		},

		damage: 190,

		effect: {
			en: "Put 3 damage counters on this Pokémon.",
			fr: "Placez 3 marqueurs de dégâts sur ce Pokémon.",
			de: "Lege 3 Schadensmarken auf dieses Pokémon.",
			es: "Pon 3 contadores de daño en este Pokémon.",
			pt: "Coloque 3 contadores de dano neste Pokémon.",
			it: "Metti tre segnalini danno su questo Pokémon."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
