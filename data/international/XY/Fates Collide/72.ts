import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Diancie EX",
		fr: "Diancie EX",
		es: "Diancie EX",
		it: "Diancie EX",
		pt: "Diancie EX",
		de: "Diancie EX"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		719,
	],

	hp: 150,

	types: [
		"Fairy",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sparkle Veil",
				fr: "Voile Étincelant",
				es: "Velo Destellante",
				it: "Splendivelo",
				pt: "Véu de Brilhante",
				de: "Glitzernder Schleier"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, any damage done to your Pokémon by an opponent's attack is reduced by 30 (after applying Weakness and Resistance).",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, tous les dégâts infligés à vos Pokémon par une attaque de votre adversaire sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
				es: "Mientras este Pokémon sea tu Pokémon Activo, cualquier daño infligido a tus Pokémon por un ataque de tu rival se reduce en 30 (después de aplicar Debilidad y Resistencia).",
				it: "Fintanto che questo Pokémon è il tuo Pokémon attivo, i danni inflitti ai tuoi Pokémon da un attacco del tuo avversario sono ridotti di 30, dopo aver applicato debolezza e resistenza.",
				pt: "Enquanto este Pokémon for seu Pokémon Ativo, qualquer dano causado em seu Pokémon por um ataque do seu oponente, será reduzido em 30 (após a aplicação de Fraqueza e Resistência).",
				de: "Solang dieses Pokémon dein Aktives Pokémon ist, wird Schaden, der deinen Pokémon durch einen gegnerischen Angriff zugefügt wird, um 30 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wonder Stage",
				fr: "Scène Miracle",
				es: "Escenario Asombroso",
				it: "Mirabilpalco",
				pt: "Palco Maravilha",
				de: "Wunderbühne"
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 50 more damage.",
				fr: "S'il y a une carte Stade en jeu, cette attaque inflige 50 dégâts supplémentaires.",
				es: "Si hay alguna carta de Estadio en juego, este ataque hace 50 puntos de daño más.",
				it: "Se c'è in gioco una carta Stadio, questo attacco infligge 50 danni in più.",
				pt: "Se houver algum card de Estádio em jogo, este ataque causará 50 de danos adicionais.",
				de: "Wenn 1 Stadionkarte im Spiel ist, fügt dieser Angriff 50 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,
	stage: "Basic",

	thirdParty: {
		cardmarket: 289893,
		tcgplayer: 117847
	}
}

export default card
