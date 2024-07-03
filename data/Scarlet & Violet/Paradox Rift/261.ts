import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Iron Valiant ex",
		fr: "Garde-de-Fer-ex",
		es: "Ferropaladín ex",
		it: "Eroeferreo-ex",
		pt: "Valentia Férrea ex",
		de: "Eisenkrieger-ex"
	},

	rarity: "Hyper rare",
	category: "Pokemon",
	hp: 220,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Tachyon Bits",
			fr: "Particules de Tachyon",
			es: "Partículas Taquiónicas",
			it: "Particelle Tachioniche",
			pt: "Fragmentos Taquiônicos",
			de: "Tachyonen-Teilchen"
		},

		effect: {
			en: "Once during your turn, when this Pokémon moves from your Bench to the Active Spot, you may put 2 damage counters on 1 of your opponent's Pokémon.",
			fr: "Une fois pendant votre tour, lorsque ce Pokémon se déplace de votre Banc vers le Poste Actif, vous pouvez placer 2 marqueurs de dégâts sur l'un des Pokémon de votre adversaire.",
			es: "Una vez durante tu turno, cuando este Pokémon se mueve de tu Banca al Puesto Activo, puedes poner 2 contadores de daño en uno de los Pokémon de tu rival.",
			it: "Una sola volta durante il tuo turno, quando questo Pokémon si sposta dalla tua panchina in posizione attiva, puoi mettere due segnalini danno su uno dei Pokémon del tuo avversario.",
			pt: "Uma vez durante o seu turno, quando este Pokémon for movido do seu Banco para o Campo Ativo, você poderá colocar 2 contadores de dano em 1 dos Pokémon do seu oponente.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon von deiner Bank in die Aktive Position wechselt, kannst du 2 Schadensmarken auf 1 Pokémon deines Gegners legen."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Laser Blade",
			fr: "Lame Laser",
			es: "Cuchilla Láser",
			it: "Lamalaser",
			pt: "Espada Laser",
			de: "Laserklinge"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 200
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card