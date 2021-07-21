import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Bastiodon",
		fr: "Bastiodon",
		es: "Bastiodon",
		it: "Bastiodon",
		pt: "Bastiodon",
		de: "Bollterus"
	},
	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		411,
	],
	hp: 160,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Shieldon",
		fr: "Dinoclier",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Earthen Shield",
				fr: "Bouclier de Terre",
				es: "Escudo Terrestre",
				it: "Terrascudo",
				pt: "Escudo Terra",
				de: "Im Schutz der Erde"
			},
			effect: {
				en: "Prevent all damage done to your Metal Pokémon by attacks from your opponent’s Pokémon that have any Special Energy attached to them.",
				fr: "Évitez tous les dégâts d’attaque infligés à vos Pokémon Metal par les Pokémon de votre adversaire auxquels est attachée de l’Énergie spéciale.",
				es: "Evita todo el daño infligido a tus Pokémon Metal por ataques de los Pokémon de tu rival que tengan alguna Energía Especial unida a ellos.",
				it: "Previeni tutti i danni inflitti ai tuoi Pokémon Metal dagli attacchi dei Pokémon del tuo avversario che abbiano delle Energie speciali assegnate.",
				pt: "Previne todo o dano causado aos seus Pokémon Metal por ataques dos Pokémon do seu oponente que tenham alguma Energia Especial ligada a eles.",
				de: "Verhindere allen Schaden, der deinen Metal-Pokémon durch Attacken von Pokémon deines Gegners, an die mindestens 1 Spezial-Energie angelegt ist, zugefügt wird."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Push Down",
				fr: "Recul",
				es: "Oprimir",
				it: "Spintonare",
				pt: "Rebaixar",
				de: "Runterdrücken"
			},
			effect: {
				en: "You may have your opponent switch their Active Pokémon with 1 of their Benched Pokémon.",
				fr: "Vous pouvez demander à votre adversaire d’échanger son Pokémon Actif avec l’un de ses Pokémon de Banc.",
				es: "Puedes hacer que tu rival cambie su Pokémon Activo por 1 de sus Pokémon en Banca.",
				it: "Puoi far scambiare al tuo avversario il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				pt: "Você pode fazer com que o seu oponente troque o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
				de: "Du kannst deinen Gegner dazu veranlassen, sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank auszutauschen."
			},
			damage: 110,

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
