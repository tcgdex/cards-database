import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Ditto",
		fr: "Métamorph",
		it: "Ditto",
		de: "Ditto"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		132,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Transform",
				fr: "Transformation",
				it: "Trasformazione",
				de: "Wandler"
			},
			effect: {
				en: "If Ditto is your Active Pokémon, treat it as if it were the same card as the Defending Pokémon, including type, Hit Points, Weakness, and so on, except Ditto can't evolve, always has this Pokémon Power, and you may treat any Energy attached to Ditto as Energy of any type. Ditto isn't a copy of any other Pokémon while Ditto is Asleep, Confused, or Paralyzed.",
				fr: "Si Metamorph est votre Pokémon Actif, considérez-le comme s'il était la même carte que le Pokémon Défenseur, y compris le type, les Points de Vie, la Faiblesse, etc., à l'exception que Metamorph ne peut pas évoluer, qu'il conserve toujours ce Pouvoir Pokémon, et que vous pouvez considérer toute Énergie attachée à Metamorph comme une Énergie de n'importe quel type. Metamorph n'est la copie d'aucun Pokémon lorsque Metamorph est Endormi, Confus ou Paralysé.",
				it: "Se Ditto è il tuo Pokémon Attivo, trattalo come se fosse una carta uguale al Pokémon Difensore, inclusi Tipo, PV, Debolezza e così via. Ditto non può evolvere, mantiene sempre il proprio potere Pokémon e ogni carta Energia assegnata a Ditto può essere usata come una carta Energia di qualsiasi tipo. Quando è Addormentato, Confuso o Paralizzato, Ditto non è una copia di un altro Pokémon.",
				de: "Falls Ditto dein aktives Pokémon ist, behandele es genauso wie die Karte des verteidigenden Pokémon, einschließlich Typ, Kraftpunkte, Schwäche usw., außer dass Ditto sich nicht entwickeln lässt, diese Pokémon-Power immer hat und jede auf Ditto abgelegte Energiekarte als Energie jeder beliebigen Art behandelt werden darf. Ditto ist kein Abbild eines anderen Pokémon, wenn Ditto schläft, verwirrt oder gelähmt ist."
			},
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		en: "Capable of copying an enemy's genetic code to instantly transform itself into a duplicate of the enemy.",
		fr: "Il est capable de copier le code génétique d'un ennemi pour se transformer en son double.",
		it: "È in grado di copiare il codice genetico del proprio nemico e di trasformarsi istantaneamente in una sua perfetta copia.",
		de: "Kann den genetischen Code eines Gegners so schnell kopieren, dass es sich sofort in sein Ebenbild verwandeln kann."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 273864,
				tcgplayer: 106519
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273864,
				tcgplayer: 106519
			}
		},
	],
}

export default card
