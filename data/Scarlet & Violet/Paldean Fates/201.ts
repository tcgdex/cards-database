import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Ditto",
		fr: "Métamorph",
		es: "Ditto",
		it: "Ditto",
		pt: "Ditto"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Transformative Start",
			fr: "Début Métamorphique",
			es: "Inicio Transformador",
			it: "Inizio Trasformativo",
			pt: "Transformação Inicial"
		},

		effect: {
			en: "Once during your first turn, if this Pokémon is in the Active Spot, you may search your deck and choose a Basic Pokémon you find there, except any Ditto. If you do, discard this Pokémon and all attached cards, and put the chosen Pokémon in its place. Then, shuffle your deck.",
			fr: "Une fois pendant votre premier tour, si ce Pokémon est sur le Poste Actif, vous pouvez chercher dans votre deck et choisir un Pokémon de base que vous y trouvez, à l'exception d'un Métamorph. Dans ce cas, défaussez ce Pokémon-ci et toutes les cartes qui lui sont attachées, puis remplacez-le par le Pokémon choisi. Mélangez ensuite votre deck.",
			es: "Una vez durante tu primer turno, si este Pokémon está en el Puesto Activo, puedes buscar en tu baraja y elegir 1 Pokémon Básico que encuentres en ella, excepto Ditto. Si lo haces, descarta este Pokémon y todas las cartas unidas a él, y pon el Pokémon elegido en su lugar. Después, baraja las cartas de tu baraja.",
			it: "Una sola volta durante il tuo primo turno, se questo Pokémon è in posizione attiva, puoi cercare nel tuo mazzo e scegliere un Pokémon Base presente in esso, a eccezione di qualsiasi Ditto. Se lo fai, scarta questo Pokémon e tutte le carte a esso assegnate, e metti al suo posto il Pokémon che hai scelto. Poi rimischia le carte del tuo mazzo.",
			pt: "Uma vez durante o seu primeiro turno, se este Pokémon estiver no Campo Ativo, você poderá procurar no seu baralho e escolher um Pokémon Básico que encontrar lá, exceto por quaisquer Ditto. Se fizer isto, descarte este Pokémon e todas as cartas ligadas a ele, e coloque o Pokémon escolhido em seu lugar. Em seguida, embaralhe o seu baralho."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Splup",
			fr: "Blop",
			es: "Pringoso",
			it: "Splup",
			pt: "Splup"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card