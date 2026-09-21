import { Card } from "../../../interfaces"
import Set from "../30th Classic Collection"

const card: Card = {
	set: Set,

	name: {
		en: "Greninja BREAK",
		fr: "Amphinobi TURBO",
		de: "Quajutsu TURBO",
		es: "Greninja TURBO",
		it: "Greninja TURBO",
		pt: "Greninja TURBO",
		'es-mx': "Greninja TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],
	stage: "BREAK",

	abilities: [{
		type: "Ability",

		name: {
			en: "Giant Water Shuriken",
			fr: "Sheauriken Géant",
			de: "Gigantische Wasser-Shuriken",
			es: "Shuriken de Agua Gigante",
			it: "Acqualame Giganti",
			pt: "Estrela Ninja de Água Gigante",
			'es-mx': "Shuriken de Agua Gigante"
		},

		effect: {
			en: "Once during your turn (before your attack)	   , if this Pokémon is your Active Pokémon, you may discard a Water Energy card from your hand. If you do, put 6 damage counters on 1 of your oppponent's Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez défausser une carte Énergie Water de votre main. Dans ce cas, placez 6 marqueurs de dégâts sur l'un des Pokémon de votre adversaire.",
			de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Water-Energiekarte von deiner Hand auf deinen Ablagestapel legen, wenn dies dein Aktives Pokémon ist. Wenn du das machst, lege 6 Schadensmarken auf 1 Pokémon deines Gegners.",
			es: "Una vez durante tu turno (antes de tu ataque), si este Pokémon es tu Pokémon Activo, puedes descartar 1 carta de Energía Water de tu mano. Si lo haces, pon 6 contadores de daño en 1 de los Pokémon de tu rival.",
			it: "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è il tuo Pokémon attivo, puoi scartare una carta Energia Water dalla tua mano. Se lo fai, metti sei segnalini danno su uno dei Pokémon del tuo avversario.",
			pt: "Uma vez durante sua vez de jogar (antes de atacar), se este Pokémon for o seu Pokémon Ativo, você poderá descartar um card de Energia Water da sua mão. Se fizer isso, coloque 6 contadores de danos em 1 dos Pokémon do seu oponente.",
			'es-mx': "Una vez durante tu turno (antes de tu ataque), si este Pokémon es tu Pokémon Activo, puedes descartar 1 carta de Energía Water de tu mano. Si lo haces, pon 6 contadores de daño en 1 de los Pokémon de tu rival."
		}
	}],

	retreat: 0,
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907960,
				tcgplayer: 716162
			}
		}
	],
}

export default card