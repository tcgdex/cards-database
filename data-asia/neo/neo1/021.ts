import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Typhlosion",
         ja: "染色",
         fr: "Typhlosion",
         de: "Typhlosion",
         es: "Tiflosión",
         it: "Tiflosione",
         pt: "Typhlosion",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [157],
      hp: 100,
      types: ["Fire"],
      stage: "Stage2",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Fire Recharge",
            ja: "火災充電",
            fr: "Recharge de feu",
            de: "Feueraufladung",
            es: "Recarga de incendios",
            it: "Ricarica del fuoco",
            pt: "Recarga de incêndio",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may flip a coin. If heads, attach a Fire Energy card from your discard pile to 1 of your Fire Pokmon. This power can't be used if Typhlosion is Asleep, Confused, or Paralyzed.",
            ja: "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭の場合は、捨てられた山から火のポクモン1に火のエネルギーカードを取り付けます。害虫が眠っている、混乱し、麻痺している場合、この力は使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez retourner une pièce. Si les têtes, fixez une carte d'énergie de feu de votre tas de défausse à 1 de votre pokmon de feu. Ce pouvoir ne peut pas être utilisé si la typhlosion est endormie, confuse ou paralysée.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> sind, können Sie eine Münze umdrehen. Wenn Sie Köpfe haben, befestigen Sie eine Feuerergiekarte von Ihrem Ablagestapel an 1 Ihres Feuerpokmons. Diese Kraft kann nicht verwendet werden, wenn die Typhlosion schläft, verwirrt oder gelähmt ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede voltear una moneda. Si se dirige, coloque una tarjeta de energía de fuego de su pila de descarte a 1 de su Fire Pokmon. Este poder no se puede usar si la tiflosión está dormida, confundida o paralizada.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi capovolgere una moneta. Se la testa, attacca una carta di energia di fuoco dalla pila di scarto a 1 del tuo fuoco Pokmon. Questo potere non può essere usato se la tiflosione è addormentata, confusa o paralizzata.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode virar uma moeda. Se as cabeças, conecte um cartão de energia de incêndio da sua pilha de descarte a 1 do seu fogo Pokmon. Esse poder não pode ser usado se a tiflosão estiver dormindo, confusa ou paralisada.",
          },
      }],

      attacks: [
        {
          cost: ["Fire", "Fire", "Fire", "Fire"],
          name: {
            en: "Flame Burst",
            ja: "炎が破裂します",
            fr: "Éclatement de flamme",
            de: "Flamme platzte",
            es: "Estallar la llama",
            it: "Scoppio di fiamma",
            pt: "Explosão de chama",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 60 damage plus 20 more damage and does 20 damage to Typhlosion. If tails, this attack does 60 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は60のダメージに20件のダメージを与え、腸チフスに20ダメージを与えます。尾の場合、この攻撃は60のダメージを与えます。",
            fr: "Retourner une pièce. Si la tête, cette attaque fait 60 dégâts plus 20 dégâts supplémentaires et fait 20 dégâts à la typhlosion. Si Tails, cette attaque fait 60 dégâts.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 60 Schaden zuzüglich 20 weitere Schäden und 20 Schäden an der Typhlosion. Wenn Schwänze, verursacht dieser Angriff 60 Schaden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 60 daños más 20 más de daño y hace 20 daños a la tiflosión. Si Tails, este ataque hace 60 daños.",
            it: "Capovolgi una moneta. Se le teste, questo attacco infligge 60 danni più 20 danni in più e infligge 20 danni alla tiflosione. Se code, questo attacco infligge 60 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 60 danos mais 20 danos e causam 20 danos à tiflosão. Se caudas, esse ataque causa 60 danos.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};
