import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Unown",
		fr: "Zarbi",
		es: "Unown",
		it: "Unown",
		pt: "Unown",
		de: "Icognito"
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		201,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "MISSING",
				fr: "MANQUANT",
				es: "DESAPARECIDAS",
				it: "SCOMPARSA",
				pt: "DESAPARECIDO",
				de: "MISSING"
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, and if your opponent has 12 or more Supporter cards in the Lost Zone, you may use this Ability. If you do, you win this game.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, et si votre adversaire a 12 cartes Supporter ou plus dans la Zone Perdue, vous pouvez utiliser ce talent. Dans ce cas, vous remportez la partie.",
				es: "Una vez durante tu turno (antes de tu ataque), si este Pokémon es tu Pokémon Activo, y si tu rival tiene 12 o más cartas de Partidario en la Zona Perdida, puedes usar esta habilidad. Si lo haces, ganas esta partida.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è il tuo Pokémon attivo e il tuo avversario ha 12 o più carte Aiuto nell’area perduta, puoi usare questa abilità. Se lo fai, vinci la partita.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), se este Pokémon for o seu Pokémon Ativo e o seu oponente tiver 12 ou mais cartas de Apoiador na Zona Perdida, você poderá usar esta Habilidade. Se fizer isto, você vencerá esta partida.",
				de: "Einmal während deines Zuges (bevor du angreifst), wenn dieses Pokémon dein Aktives Pokémon ist und dein Gegner 12 oder mehr Unterstützerkarten im Nirgendwo hat, kannst du diese Fähigkeit einsetzen. Wenn du das machst, gewinnst du dieses Spiel."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance Cachée",
				es: "Poder Oculto",
				it: "Introforza",
				pt: "Poder Oculto",
				de: "Kraftreserve"
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
