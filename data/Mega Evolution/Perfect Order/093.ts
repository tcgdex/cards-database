import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Dedenne",
		fr: "Dedenne",
		es: "Dedenne",
		'es-mx': "Dedenne",
		de: "Dedenne",
		it: "Dedenne",
		pt: "Dedenne"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Tail Generator",
			fr: "Générateur Caudal",
			es: "Generador Cola",
			'es-mx': "Cola Generadora",
			de: "Generatorschweif",
			it: "Codageneratore",
			pt: "Gerador de Cauda"
		},

		effect: {
			en: "Choose Basic {L} Energy cards from your discard pile up to the amount of Energy attached to all of your opponent's Pokémon and attach them to your {L} Pokémon in any way you like.",
			fr: "Choisissez dans votre pile de défausse un nombre de cartes Énergie {L} de base inférieur ou égal à la quantité d'Énergies attachées à tous les Pokémon de votre adversaire, puis attachez-les à vos Pokémon {L} comme il vous plaît.",
			es: "Elige una cantidad de cartas de Energía {L} Básica de tu pila de descartes igual o inferior a la cantidad de Energías unidas a cada uno de los Pokémon de tu rival, y únelas a tus Pokémon {L} de la manera que desees.",
			'es-mx': "Elige una cantidad de cartas de Energía {L} Básica de tu pila de descartes igual o inferior a la cantidad de Energías unidas a cada uno de los Pokémon de tu rival, y únelas a tus Pokémon {L} de la manera que quieras.",
			de: "Wähle bis zu so viele Basis-{L}-Energiekarten aus deinem Ablagestapel, wie Energien an alle Pokémon deines Gegners angelegt sind, und lege sie beliebig an deine {L}-Pokémon an.",
			it: "Scegli un numero di carte Energia base {L} dalla tua pila degli scarti uguale o inferiore al numero di Energie assegnate ai Pokémon del tuo avversario e assegnale ai tuoi Pokémon {L} nel modo che preferisci.",
			pt: "Escolha cartas de Energia {L} Básica da sua pilha de descarte até a quantidade de Energias ligadas a todos os Pokémon do seu oponente e ligue-as aos seus Pokémon {L} como desejar."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Thunder Shock",
			fr: "Éclair",
			es: "Impactrueno",
			'es-mx': "Impactrueno",
			de: "Donnerschock",
			it: "Tuonoshock",
			pt: "Trovoada de Choques"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Paralizado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "J"
}

export default card