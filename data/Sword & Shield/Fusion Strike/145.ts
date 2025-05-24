import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [344],
	set: Set,

	name: {
		en: "Claydol",
		fr: "Kaorine",
		es: "Claydol",
		it: "Claydol",
		pt: "Claydol",
		de: "Lepumentas"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		en: "Baltoy",
		fr: "Balbuto",
		es: "Baltoy",
		it: "Baltoy",
		pt: "Baltoy",
		de: "Puppance"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Akira Komayama",

	description: {
		en: "It appears to have been born from clay dolls made by ancient people. It uses telekinesis to float and move."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Rapid Spin",
			fr: "Tour Rapide",
			de: "Turbodreher",
			es: "Giro Rápido",
			pt: "Giro Rápido",
			it: "Rapigiro"
		},

		damage: 30,

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon. If you do, your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc. Dans ce cas, votre adversaire échange son Pokémon Actif contre l'un de ses Pokémon de Banc.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus. Wenn du das machst, tauscht dein Gegner sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus.",
			es: "Cambia este Pokémon por 1 de tus Pokémon en Banca. Si lo haces, tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco. Se fizer isto, o seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
			it: "Scambia questo Pokémon con uno della tua panchina. Se lo fai, il tuo avversario scambia il suo Pokémon attivo con uno della sua panchina."
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Ancient Imprint",
			fr: "Empreinte Ancestrale",
			de: "Uralte Prägung",
			es: "Marca Ancestral",
			pt: "Impressão Ancestral",
			it: "Influsso Antico"
		},

		effect: {
			en: "Put damage counters on your opponent's Active Pokémon until its remaining HP is 60.",
			fr: "Placez des marqueurs de dégâts sur le Pokémon Actif de votre adversaire jusqu'à ce qu'il ne lui reste que 60 PV.",
			de: "Lege so lange Schadensmarken auf das Aktive Pokémon deines Gegners, bis seine verbleibenden KP gleich 60 sind.",
			es: "Pon contadores de daño en el Pokémon Activo de tu rival hasta que le queden 60 PS.",
			pt: "Coloque contadores de dano no Pokémon Ativo do seu oponente até o PS restante dele ser 60.",
			it: "Metti dei segnalini danno sul Pokémon attivo del tuo avversario finché i suoi PS rimanenti diventano 60."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card