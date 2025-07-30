import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Dracovish V",
		fr: "Hydragon V",
		es: "Dracovish V",
		it: "Dracovish V",
		pt: "Dracovish V",
		de: "Pescragon V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Grass", "Water"],

		name: {
			en: "Slosh 'n' Crash",
			fr: "Écraboussure",
			es: "Derramar y Golpear",
			it: "Sguazza e Distruggi",
			pt: "Deglutir e Detonar",
			de: "Zappzarapp"
		},

		effect: {
			en: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon. If you discarded a Pokémon Tool in this way, this attack does 120 more damage.",
			fr: "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire. Si vous avez défaussé un Outil Pokémon de cette façon, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival. Si has descartado alguna Herramienta Pokémon de esta manera, este ataque hace 120 puntos de daño más.",
			it: "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon dal Pokémon attivo del tuo avversario. Se hai scartato una carta Oggetto Pokémon in questo modo, questo attacco infligge 120 danni in più.",
			pt: "Antes de causar dano, descarte todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente. Se você descartou uma Ferramenta Pokémon desta forma, este ataque causará 120 pontos de dano a mais.",
			de: "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel. Wenn du mindestens 1 Pokémon-Ausrüstung auf diese Weise auf seinen Ablagestapel gelegt hast, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}, {
		cost: ["Grass", "Water", "Water"],

		name: {
			en: "Dragon Strike",
			fr: "Frappe du Dragon",
			es: "Golpe Dragón",
			it: "Dragocolpo",
			pt: "Ataque de Dragão",
			de: "Drachenhieb"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Dragon Strike.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Frappe du Dragon.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Golpe Dragón.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Dragocolpo.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Ataque de Dragão.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Drachenhieb nicht einsetzen."
		},

		damage: 210
	}],

	retreat: 3,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 608660
	}
}

export default card
