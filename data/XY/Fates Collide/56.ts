import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Tyranitar",
		fr: "Tyranocif",
		es: "Tyranitar",
		it: "Tyranitar",
		pt: "Tyranitar",
		de: "Despotar"
	},
	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		248,
	],
	hp: 160,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Pupitar",
		fr: "Ymphect",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Raging Roar",
				fr: "Rugissement Enragé",
				es: "Rugido Furioso",
				it: "Ruggito Furioso",
				pt: "Rugido Furioso",
				de: "Wütendes Gebrüll"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may attach 1 Darkness Energy from your discard pile to this Pokémon for each Prize card your opponent has taken.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon, vous pouvez attacher 1 Énergie Darkness de votre pile de défausse à ce Pokémon pour chaque carte Récompense que votre adversaire a récupérée.",
				es: "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes unir 1 Energía Darkness de tu pila de descartes a este Pokémon por cada carta de Premio que haya tomado tu rival.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi assegnare a questo Pokémon un’Energia Darkness dalla tua pila degli scarti per ogni carta Premio presa dal tuo avversario.",
				pt: "Ao jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá ligar 1 Energia Darkness da sua pilha de descarte a este Pokémon para cada card de Prêmio recebido por seu oponente.",
				de: "Wenn du dieses Pokémon von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du für jede Preiskarte, die dein Gegner bereits genommen hat, 1 Darkness-Energie aus deinem Ablagestapel an dieses Pokémon anlegen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Dark Mountain",
				fr: "Montagne Obscure",
				es: "Montaña Oscura",
				it: "Monte Buio",
				pt: "Montanha Sombria",
				de: "Dunkler Berg"
			},
			effect: {
				en: "Discard the top 2 cards of your deck. This attack does 50 more damage for each Supporter card discarded in this way.",
				fr: "Défaussez les 2 cartes du dessus de votre deck. Cette attaque inflige 50 dégâts supplémentaires pour chaque carte Supporter défaussée de cette façon.",
				es: "Descarta las 2 primeras cartas de tu baraja. Este ataque hace 50 puntos de daño más por cada carta de Partidario descartada de esta manera.",
				it: "Scarta le prime due carte del tuo mazzo. Questo attacco infligge 50 danni in più per ogni carta Aiuto scartata in questo modo.",
				pt: "Descarte 2 cards de cima do seu baralho. Este ataque causa 50 de danos adicionais para cada card de Apoiador descartado desta forma.",
				de: "Lege die obersten 2 Karten deines Decks auf deinen Ablagestapel. Dieser Angriff fügt 50 weitere Schadenspunkte für jede Unterstützerkarte zu, die auf diese Weise auf den Ablagestapel gelegt wurde."
			},
			damage: "150+",

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
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
