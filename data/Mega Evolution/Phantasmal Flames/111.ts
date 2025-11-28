import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Rotom ex",
		fr: "Motisma-ex",
		es: "Rotom ex",
		'es-mx': "Rotom ex",
		de: "Rotom-ex",
		it: "Rotom-ex",
		pt: "Rotom ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",

	dexId: [479],
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",
	dexId: [479],

	abilities: [{
		type: "Ability",

		name: {
			en: "Multi Adapter",
			fr: "Multi-Adaptateur",
			es: "Multiadaptador",
			'es-mx': "Multiadaptador",
			de: "Multi-Adapter",
			it: "Multiadattatore",
			pt: "Adaptador Multiuso"
		},

		effect: {
			en: "Each of your Pokémon that has \"Rotom\" in its name may have up to 2 Pokémon Tool cards attached. If this Ability goes away, discard Pokémon Tools from those Pokémon until only 1 remains on each.",
			fr: "Jusqu'à 2 cartes Outil Pokémon peuvent être attachées à chacun de vos Pokémon ayant \" Motisma \" dans leur nom. Si ce talent disparaît, défaussez des Outils Pokémon de ces Pokémon jusqu'à ce qu'il ne leur en reste qu'un chacun.",
			es: "Cada uno de tus Pokémon que tengan \"Rotom\" en su nombre puede tener hasta 2 cartas de Herramienta Pokémon unidas. Si esta habilidad desaparece, descarta Herramientas Pokémon de esos Pokémon hasta que solo les quede una a cada uno.",
			'es-mx': "Cada uno de tus Pokémon que tengan \"Rotom\" en su nombre puede tener hasta 2 cartas de Herramienta Pokémon unidas. Si esta Habilidad desaparece, descarta Herramientas Pokémon de esos Pokémon hasta que solo les quede 1 a cada uno.",
			de: "An jedes deiner Pokémon, bei dem \"Rotom\" zum Namen gehört, können bis zu 2 Pokémon-Ausrüstungen angelegt sein. Wenn diese Fähigkeit nicht mehr aktiv ist, lege von jenen Pokémon so lange Pokémon-Ausrüstungen auf deinen Ablagestapel, bis an jedem nur 1 übrig ist.",
			it: "Ciascuno dei tuoi Pokémon che ha \"Rotom\" nel nome può avere fino a due carte Oggetto Pokémon assegnate. Se questa abilità viene persa, scarta carte Oggetto Pokémon da quei Pokémon finché ne resta solo una su ciascuno.",
			pt: "Cada um dos seus Pokémon que tem \"Rotom\" em seu nome pode ter até 2 cartas de Ferramenta Pokémon ligadas a ele. Se esta Habilidade parar de funcionar, descarte Ferramentas Pokémon daqueles Pokémon até restar apenas 1 em cada."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Thunderbolt",
			fr: "Tonnerre",
			es: "Rayo",
			'es-mx': "Atactrueno",
			de: "Donnerblitz",
			it: "Fulmine",
			pt: "Relâmpago"
		},

		effect: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toutes les Énergies de ce Pokémon.",
			es: "Descarta todas las Energías de este Pokémon.",
			'es-mx': "Descarta todas las Energías de este Pokémon.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta tutte le Energie da questo Pokémon.",
			pt: "Descarte todas as Energias deste Pokémon."
		},

		damage: 130
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857686
	}
}

export default card