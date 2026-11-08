import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [778],
	set: Set,

	name: {
		'en-us': "Mimikyu V",
		'fr-fr': "Mimiqui V",
		'es-es': "Mimikyu V",
		'it-it': "Mimikyu V",
		'pt-br': "Mimikyu V",
		'de-de': "Mimigma V"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Dummy Doll",
			'fr-fr': "Poupée Mannequin",
			'es-es': "Muñeco Ficticio",
			'it-it': "Fantoccio",
			'pt-br': "Boneco Postiço",
			'de-de': "Attrappenpuppe"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may prevent all damage done to this Mimikyu V by attacks from your opponent's Pokémon until the end of your opponent's next turn.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez éviter tous les dégâts infligés à ce Mimiqui-V par les attaques des Pokémon de votre adversaire jusqu'à la fin du prochain tour de celui-ci.",
			'es-es': "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes evitar todo el daño infligido a este Mimikyu V por ataques de los Pokémon de tu rival hasta el final del próximo turno de tu rival.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi prevenire tutti i danni inflitti a questo Mimikyu-V dagli attacchi dei Pokémon del tuo avversario fino alla fine del suo prossimo turno.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá prevenir todo o dano causado a este Mimikyu V por ataques dos Pokémon do seu oponente até o final do próximo turno do seu oponente.",
			'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du bis zum Ende des nächsten Zuges deines Gegners allen Schaden, der diesem Mimigma-V durch Attacken der Pokémon deines Gegners zugefügt wird, verhindern."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Jealous Eyes",
			'fr-fr': "Regard Envieux",
			'es-es': "Ojos Celosos",
			'it-it': "Sguardo Invidioso",
			'pt-br': "Olhar Invejoso",
			'de-de': "Neidische Augen"
		},

		effect: {
			'en-us': "Put 3 damage counters on your opponent's Active Pokémon for each Prize card your opponent has taken.",
			'fr-fr': "Placez 3 marqueurs de dégâts sur le Pokémon Actif de votre adversaire pour chaque carte Récompense que votre adversaire a récupérée.",
			'es-es': "Pon 3 contadores de daño en el Pokémon Activo de tu rival por cada carta de Premio que haya cogido tu rival.",
			'it-it': "Metti tre segnalini danno sul Pokémon attivo del tuo avversario per ogni carta Premio che ha preso.",
			'pt-br': "Coloque 3 contadores de dano no Pokémon Ativo do seu oponente para cada carta de Prêmio que seu oponente pegou.",
			'de-de': "Lege für jede von deinem Gegner genommene Preiskarte 3 Schadensmarken auf das Aktive Pokémon deines Gegners."
		},

		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 546346,
				tcgplayer: 234045
			}
		},
	],
}

export default card
