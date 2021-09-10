import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Banette GX",
		fr: "Branette GX",
		es: "Banette GX",
		it: "Banette GX",
		pt: "Banette GX",
		de: "Banette GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		354,
	],
	hp: 190,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Shuppet",
		fr: "Polichombr",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shady Move",
				fr: "Déplacement Louche",
				es: "Movimiento Sombrío",
				it: "Ombramossa",
				pt: "Movimento Umbroso",
				de: "Zwielichtige Aktion"
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may move 1 damage counter from 1 Pokémon to another Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez déplacer un marqueur de dégâts d’un Pokémon vers un autre Pokémon.",
				es: "Una vez durante tu turno (antes de tu ataque), si este Pokémon es tu Pokémon Activo, puedes mover 1 contador de daño de 1 Pokémon a otro Pokémon.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è il tuo Pokémon attivo, puoi spostare un segnalino danno da un Pokémon a un altro.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), se este Pokémon for o seu Pokémon Ativo, você poderá mover 1 contador de dano de um Pokémon para outro Pokémon.",
				de: "Einmal während deines Zuges (bevor du angreifst), wenn dieses Pokémon dein Aktives Pokémon ist, kannst du 1 Schadensmarke von 1 Pokémon auf 1 anderes Pokémon verschieben."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Shadow Chant",
				fr: "Chant d’Ombre",
				es: "Canto Sombrío",
				it: "Canto Ombra",
				pt: "Canção das Sombras",
				de: "Schattengesang"
			},
			effect: {
				en: "This attack does 10 more damage for each Supporter card in your discard pile. You can’t add more than 100 damage in this way.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque carte Supporter dans votre pile de défausse. Vous ne pouvez pas ajouter plus de 100 dégâts de cette façon.",
				es: "Este ataque hace 10 puntos de daño más por cada carta de Partidario en tu pila de descartes. No puedes añadir más de 100 puntos de daño de esta manera.",
				it: "Questo attacco infligge 10 danni in più per ogni carta Aiuto nella tua pila degli scarti. Non puoi aggiungere più di 100 danni in questo modo.",
				pt: "Este ataque causa 10 pontos de dano a mais para cada carta de Apoiador na sua pilha de descarte. Você não pode adicionar mais de 100 pontos de dano desta forma.",
				de: "Diese Attacke fügt 10 Schadenspunkte mehr mal der Anzahl der Unterstützerkarten in deinem Ablagestapel zu. Du kannst auf diese Weise höchstens 100 Schadenspunkte mehr zufügen."
			},
			damage: "30+",

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Tomb Hunt GX",
				fr: "Chasse Sépulcre GX",
				es: "Caza de Tumbas GX",
				it: "Caccia Sepolcrale-GX",
				pt: "Caça-túmulos GX",
				de: "Grabjagd GX"
			},
			effect: {
				en: "Put 3 cards from your discard pile into your hand. (You can’t use more than 1 GX attack in a game.)",
				fr: "Prenez 3 cartes dans votre pile de défausse et ajoutez-les à votre main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Pon 3 cartas de tu pila de descartes en tu mano. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Prendi tre carte dalla tua pila degli scarti e aggiungile a quelle che hai in mano. Non puoi usare più di un attacco GX a partita.",
				pt: "Coloque 3 cartas da sua pilha de descarte na sua mão (você não pode usar mais de 1 ataque GX por partida).",
				de: "Nimm 3 Karten aus deinem Ablagestapel auf deine Hand. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
