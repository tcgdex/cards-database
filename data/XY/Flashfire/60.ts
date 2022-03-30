import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Forretress",
		fr: "Foretress",
		es: "Forretress",
		it: "Forretress",
		pt: "Forretress",
		de: "Forstellka"
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		205,
	],
	hp: 100,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Pineco",
		fr: "Pomdepik",
		es: "Pineco",
		it: "Pineco",
		pt: "Pineco",
		de: "Tannza"
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Thorn Tempest",
				fr: "Tempête d'Épines",
				es: "Tempestad de Espinas",
				it: "Spintempesta",
				pt: "Tempestade de Espinhos",
				de: "Stachelsturm"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may put 1 damage counter on each of your opponent's Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez placer un marqueur de dégâts sur chacun des Pokémon de votre adversaire.",
				es: "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes poner 1 contador de daño en cada uno de los Pokémon de tu rival.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi mettere un segnalino danno su ciascuno dei Pokémon del tuo avversario.",
				pt: "Ao jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você pode colocar 1 contador de dano em cada um dos Pokémon do seu oponente.",
				de: "Wenn du dieses Pokémon von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du auf jedes Pokémon deines Gegners 1 Schadensmarke legen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Iron Crash",
				fr: "Fer Destructeur",
				es: "Impacto Férreo",
				it: "Schiacciaferro",
				pt: "Choque de Ferro",
				de: "Eiserner Sturz"
			},
			effect: {
				en: "This attack does 20 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 20 puntos de daño más por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 20 danni in più per ogni Energia Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
				pt: "Esse ataque causa 20 de danos adicionais para cada Colorless no Custo para Recuar do Pokémon Ativo do seu oponente.",
				de: "Dieser Angriff fügt 20 weitere Schadenspunkte für jedes Colorless-Symbol in den Rückzugskosten des Aktiven Pokémon deines Gegners zu."
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
