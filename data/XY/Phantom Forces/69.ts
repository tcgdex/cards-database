import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Slurpuff",
		fr: "Cupcanaille",
		es: "Slurpuff",
		it: "Slurpuff",
		pt: "Slurpuff",
		de: "Sabbaione"
	},

	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		685,
	],

	hp: 90,

	types: [
		"Fairy",
	],

	evolveFrom: {
		en: "Swirlix",
		fr: "Sucroquin",
		es: "Swirlix",
		it: "Swirlix",
		pt: "Swirlix",
		de: "Flauschling"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Tasting",
				fr: "Dégustation",
				es: "Degustación",
				it: "Assaggio",
				pt: "Degustação",
				de: "Kostprobe"
			},
			effect: {
				en: "Once during your turn (before your attack), you may draw a card. If this Pokémon is your Active Pokémon, draw 1 more card.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher une carte. Si ce Pokémon est votre Pokémon Actif, piochez une carte supplémentaire.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes robar 1 carta. Si este Pokémon es tu Pokémon Activo, roba 1 carta más.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi pescare una carta. Se questo Pokémon è il tuo Pokémon attivo, pesca una carta in più.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você pode comprar um card. Se este Pokémon for seu Pokémon Ativo, compre mais 1 card.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Karte ziehen. Wenn dieses Pokémon dein Aktives Pokémon ist, ziehe 1 zusätzliche Karte."
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
				en: "Light Pulse",
				fr: "Vibrumineuse",
				es: "Pulso Luminoso",
				it: "Impulso Minore",
				pt: "Pulso de Luz",
				de: "Sanfte Welle"
			},
			effect: {
				en: "Prevent all effects of your opponent's attacks, except damage, done to this Pokémon during your opponent's next turn.",
				fr: "Évitez tous les effets des attaques de votre adversaire, excepté les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
				es: "Evita todos los efectos de los ataques de tu rival, excepto el daño, infligidos a este Pokémon durante el próximo turno de tu rival.",
				it: "Previeni tutti gli effetti degli attacchi del tuo avversario, esclusi i danni, inflitti a questo Pokémon durante il prossimo turno del tuo avversario.",
				pt: "Previne todos os efeitos dos ataques do seu oponente, exceto danos, causados a este Pokémon durante a próxima vez do seu oponente.",
				de: "Verhindere alle Effekte von gegnerischen Angriffen, außer Schaden, die diesem Pokémon während des nächsten Zuges deines Gegners zugefügt werden."
			},
			damage: 60,

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

	retreat: 1,

	thirdParty: {
		cardmarket: 281875,
		tcgplayer: 94637
	}
}

export default card
