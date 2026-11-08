import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Rotom ex",
		'fr-fr': "Motisma-ex",
		'es-es': "Rotom ex",
		'es-mx': "Rotom ex",
		'de-de': "Rotom-ex",
		'it-it': "Rotom-ex",
		'pt-br': "Rotom ex"
	},

	rarity: "Double rare",
	category: "Pokemon",

	dexId: [479],
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Multi Adapter",
			'fr-fr': "Multi-Adaptateur",
			'es-es': "Multiadaptador",
			'es-mx': "Multiadaptador",
			'de-de': "Multi-Adapter",
			'it-it': "Multiadattatore",
			'pt-br': "Adaptador Multiuso"
		},

		effect: {
			'en-us': "Each of your Pokémon that has \"Rotom\" in its name may have up to 2 Pokémon Tool cards attached. If this Ability goes away, discard Pokémon Tools from those Pokémon until only 1 remains on each.",
			'fr-fr': "Jusqu'à 2 cartes Outil Pokémon peuvent être attachées à chacun de vos Pokémon ayant \" Motisma \" dans leur nom. Si ce talent disparaît, défaussez des Outils Pokémon de ces Pokémon jusqu'à ce qu'il ne leur en reste qu'un chacun.",
			'es-es': "Cada uno de tus Pokémon que tengan \"Rotom\" en su nombre puede tener hasta 2 cartas de Herramienta Pokémon unidas. Si esta habilidad desaparece, descarta Herramientas Pokémon de esos Pokémon hasta que solo les quede una a cada uno.",
			'es-mx': "Cada uno de tus Pokémon que tengan \"Rotom\" en su nombre puede tener hasta 2 cartas de Herramienta Pokémon unidas. Si esta Habilidad desaparece, descarta Herramientas Pokémon de esos Pokémon hasta que solo les quede 1 a cada uno.",
			'de-de': "An jedes deiner Pokémon, bei dem \"Rotom\" zum Namen gehört, können bis zu 2 Pokémon-Ausrüstungen angelegt sein. Wenn diese Fähigkeit nicht mehr aktiv ist, lege von jenen Pokémon so lange Pokémon-Ausrüstungen auf deinen Ablagestapel, bis an jedem nur 1 übrig ist.",
			'it-it': "Ciascuno dei tuoi Pokémon che ha \"Rotom\" nel nome può avere fino a due carte Oggetto Pokémon assegnate. Se questa abilità viene persa, scarta carte Oggetto Pokémon da quei Pokémon finché ne resta solo una su ciascuno.",
			'pt-br': "Cada um dos seus Pokémon que tem \"Rotom\" em seu nome pode ter até 2 cartas de Ferramenta Pokémon ligadas a ele. Se esta Habilidade parar de funcionar, descarte Ferramentas Pokémon daqueles Pokémon até restar apenas 1 em cada."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Thunderbolt",
			'fr-fr': "Tonnerre",
			'es-es': "Rayo",
			'es-mx': "Atactrueno",
			'de-de': "Donnerblitz",
			'it-it': "Fulmine",
			'pt-br': "Relâmpago"
		},

		effect: {
			'en-us': "Discard all Energy from this Pokémon.",
			'fr-fr': "Défaussez toutes les Énergies de ce Pokémon.",
			'es-es': "Descarta todas las Energías de este Pokémon.",
			'es-mx': "Descarta todas las Energías de este Pokémon.",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta tutte le Energie da questo Pokémon.",
			'pt-br': "Descarte todas as Energias deste Pokémon."
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	illustrator: "5ban Graphics",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 857604,
				tcgplayer: 662220,
				cardtrader: 356812
			}
		},
	],	
}

export default card
