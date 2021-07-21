import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Sylveon",
		fr: "Nymphali",
		es: "Sylveon",
		it: "Sylveon",
		pt: "Sylveon",
		de: "Feelinara"
	},
	illustrator: "0313",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		700,
	],
	hp: 90,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Wink Wink",
				fr: "Clin d’Œil",
				es: "Guiño Cómplice",
				it: "Occhiolino",
				pt: "Piscadinha",
				de: "Blinzeln"
			},
			effect: {
				en: "Your opponent reveals their hand. You may discard a Supporter card you find there and use the effect of that card as the effect of this attack.",
				fr: "Votre adversaire dévoile sa main. Vous pouvez défausser une carte Supporter que vous y trouvez et utiliser l’effet de la carte défaussée en tant qu’effet de cette attaque.",
				es: "Tu rival enseña las cartas de su mano. Puedes descartar 1 carta de Partidario que encuentres entre ellas y usar el efecto de esa carta como efecto de este ataque.",
				it: "Il tuo avversario mostra le carte che ha in mano. Puoi scartare una carta Aiuto presente tra quelle carte e usare l’effetto della carta come effetto di questo attacco.",
				pt: "Seu oponente revela a própria mão. Você pode descartar 1 carta de Apoiador que encontrar lá e usar o efeito daquela carta como o efeito deste ataque.",
				de: "Dein Gegner zeigt dir seine Handkarten. Du kannst 1 Unterstützerkarte, die du dort findest, auf seinen Ablagestapel legen und den Effekt jener Karte als Effekt dieser Attacke einsetzen."
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Magical Shot",
				fr: "Coup Magique",
				es: "Disparo Mágico",
				it: "Magicolpo",
				pt: "Tiro Mágico",
				de: "Magischer Schuss"
			},

			damage: 40,

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



}

export default card
