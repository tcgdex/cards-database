import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Rattata",
         ja: "ラッタタ",
         fr: "Rattata",
         de: "Rattata",
         es: "Rattata",
         it: "Rattata",
         pt: "Rattata",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [19],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Trickery",
            ja: "トリック",
            fr: "Tromperie",
            de: "Trick",
            es: "Astucia",
            it: "Inganno",
            pt: "Truques",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may switch 1 of your Prizes with the top card of your deck. This power can't be used if Rattata is Asleep, Confused, or Paralyzed.",
            ja: "ターン中に（攻撃の前に）</em> </em>、デッキのトップカードで賞品を1つ切り替えることができます。ラッタタが眠っている、混乱し、麻痺している場合、この力は使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez changer 1 de vos prix avec la carte supérieure de votre deck. Ce pouvoir ne peut pas être utilisé si Rattata est endormi, confus ou paralysé.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff) </em> können Sie 1 Ihrer Preise mit der oberen Karte Ihres Decks wechseln. Diese Kraft kann nicht verwendet werden, wenn Rattata schläft, verwirrt oder gelähmt ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede cambiar 1 de sus premios con la carta superior de su mazo. Este poder no se puede usar si Rattata está dormido, confundido o paralizado.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi cambiare 1 dei tuoi premi con la carta superiore del tuo mazzo. Questo potere non può essere usato se il rattata è addormentato, confuso o paralizzato.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode alternar 1 de seus prêmios com a carta superior do seu baralho. Esse poder não pode ser usado se Rattata estiver dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Quick Attack",
            ja: "クイック攻撃",
            fr: "Attaque rapide",
            de: "Schneller Angriff",
            es: "Ataque rápido",
            it: "Attacco rapido",
            pt: "Ataque rápido",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage; if tails, this attack does 10 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて10ダメージを与えます。尾の場合、この攻撃は10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 10 dégâts supplémentaires; Si Tails, cette attaque fait 10 dégâts.",
            de: "Eine Münze drehen. Wenn Köpfe, verursacht dieser Angriff 10 Schäden plus 10 weitere Schäden; Wenn Schwänze, verursacht dieser Angriff 10 Schaden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 10 más de daño; Si Tails, este ataque hace 10 daños.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni più 10 danni in più; Se le code, questo attacco infligge 10 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 10 mais danos; Se caudas, esse ataque causa 10 danos.",
          },
        },
      ],


      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
