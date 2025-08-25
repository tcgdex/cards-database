import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [385],
	set: Set,

	name: {
		en: "Jirachi V",
		fr: "Jirachi V",
		es: "Jirachi V",
		it: "Jirachi V",
		pt: "Jirachi V",
		de: "Jirachi V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			en: "Wish Connector",
			fr: "Connecteur de Souhaits",
			es: "Conector Deseo",
			it: "Connettore di Desideri",
			pt: "Conector de Desejos",
			de: "Wunschbrücke"
		},

		effect: {
			en: "When 1 of your Basic Pokémon V is Knocked Out by damage from an attack from your opponent's Pokémon, you may move a basic Energy card from that Pokémon to another of your Pokémon.",
			fr: "Lorsque l'un de vos Pokémon-V de base est mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire, vous pouvez déplacer une carte Énergie de base de ce Pokémon-là vers un autre de vos Pokémon.",
			es: "Cuando 1 de tus Pokémon V Básicos queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, puedes mover 1 carta de Energía Básica de ese Pokémon a otro de tus Pokémon.",
			it: "Quando uno dei tuoi Pokémon-V Base viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, puoi spostare una carta Energia base da quel Pokémon a un altro dei tuoi Pokémon.",
			pt: "Quando 1 dos seus Pokémon V Básicos for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, você poderá mover 1 carta de Energia básica daquele Pokémon para outro Pokémon seu.",
			de: "Wenn 1 deiner Basis-Pokémon-V durch Schaden einer Attacke der Pokémon deines Gegners kampfunfähig wird, kannst du 1 Basis-Energiekarte von jenem Pokémon auf ein anderes deiner Pokémon verschieben."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Hypnostrike",
			fr: "Choc Sommeil",
			es: "Hipnogolpe",
			it: "Ipnocolpo",
			pt: "Hipnogolpe",
			de: "Hypnostoß"
		},

		effect: {
			en: "Both Active Pokémon are now Asleep.",
			fr: "Les deux Pokémon Actifs sont maintenant Endormis.",
			es: "Ambos Pokémon Activos pasan a estar Dormidos.",
			it: "Entrambi i Pokémon attivi vengono addormentati.",
			pt: "Ambos os Pokémon Ativos agora estão Adormecidos.",
			de: "Beide Aktiven Pokémon schlafen jetzt."
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658831,
		tcgplayer: 272710
	}
}

export default card