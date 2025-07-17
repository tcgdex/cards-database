import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Shining Gyarados",
         ja: "輝くギャラドス",
         fr: "Gyarados brillants",
         de: "Leuchtende Gyarados",
         es: "Gyarados brillantes",
         it: "Gyarados splendente",
         pt: "Gyarados brilhantes",
      },

      rarity: "Secret Rare",
      category: "Pokemon",
      dexId: [130],
      hp: 100,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water", "Fighting", "Fighting"],
          name: {
            en: "Outrage",
            ja: "怒り",
            fr: "Outrage",
            de: "Empörung",
            es: "Escándalo",
            it: "Indignazione",
            pt: "Ultraje",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage for each damage counter on Shining Gyarados. If tails, this attack does nothing.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は30のダメージに加えて、輝くギャラドスの各ダメージカウンターでさらに10ダメージを与えます。尾の場合、この攻撃は何もしません。",
            fr: "Retourner une pièce. Si les têtes, cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque compteur de dégâts sur des gyarados brillants. Si Tails, cette attaque ne fait rien.",
            de: "Eine Münze drehen. Wenn dieser Angriff 30 Schäden plus 10 weitere Schäden für jeden Schadensschalter bei glänzendem Gyarados anregt. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 30 daños más 10 10 más de daño por cada mostrador de daño en Gyarados brillantes. Si Tails, este ataque no hace nada.",
            it: "Capovolgi una moneta. Se le teste, questo attacco infligge 30 danni più 10 danni in più per ciascun contatore di danni su Gyarados splendente. Se le code, questo attacco non fa nulla.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 30 danos mais 10 mais danos para cada contador de danos em gyarados brilhantes. Se caudas, esse ataque não faz nada.",
          },
        },
        {
          cost: ["Water", "Water", "Fire", "Fire"],
          name: {
            en: "Devastate",
            ja: "壊滅的です",
            fr: "Dévaster",
            de: "Verwüsten",
            es: "Devastar",
            it: "Devastare",
            pt: "Devastar",
          },
          effect: {
            en: "Discard 2 Fire Energy cards attached to Shining Gyarados or this attack does nothing. This attack does 10 damage to each of your opponent's Benched Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.) Then, flip a coin. If heads, choose 1 Energy card attached to each of your opponent's Pokemon that has any Energy cards attached to it and discard those Energy cards.",
            ja: "輝くギャラドスに取り付けられた2つのファイアエネルギーカードを捨てるか、この攻撃は何もしません。この攻撃は、相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）次に、コインをひっくり返します。ヘッドの場合は、エネルギーカードが付いているエネルギーカードを持っている各敵のポケモンに1枚のエネルギーカードを選択し、それらのエネルギーカードを破棄します。",
            fr: "Jetez 2 cartes d'énergie de feu attachées à des gyarados brillants ou cette attaque ne fait rien. Cette attaque inflige 10 dégâts à chacun des pokemon bancés de votre adversaire. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.) Ensuite, retournez une pièce. Si les têtes, choisissez 1 carte d'énergie attachée à chacun des pokemon de votre adversaire qui a des cartes d'énergie qui y sont attachées et jetez ces cartes d'énergie.",
            de: "Abwerfen 2 Feuersenergiekarten, die an Shining Gyarados angebracht sind, oder dieser Angriff tut nichts. Dieser Angriff schädigt 10 das Bankpokémon Ihres Gegners. (Wenden Sie keine Schwäche und Widerstand für ein Bankpokémon an.) Dann drehen Sie eine Münze um. Wenn Sie Köpfe haben, wählen Sie 1 Energiemittel -Pokémon Ihres Gegners, auf dem Energiekarten angebracht sind, und entsorgen Sie diese Energiekarten.",
            es: "Descarte 2 cartas de energía de fuego unidas a Gyarados brillantes o este ataque no hace nada. Este ataque hace 10 daños a cada Pokémon de banca de tu oponente. (No aplique debilidad y resistencia para los pokemon de banca). Luego, voltee una moneda. Si se dirige, elija 1 tarjeta de energía adjunta a cada Pokémon de su oponente que tiene alguna tarjeta de energía unida y descarte esas tarjetas de energía.",
            it: "Scartare 2 carte di energia antincendio attaccate a Gyarados splendenti o questo attacco non fa nulla. Questo attacco infligge 10 danni a ciascuno dei Pokemon in panchina del tuo avversario. (Non applicare debolezza e resistenza per i Pokemon in panchina.) Quindi, capovolgi una moneta. Se le teste, scegli 1 carta di energia collegata a ciascuno dei Pokemon del tuo avversario che ha delle carte di energia allegate e scartare quelle carte energetiche.",
            pt: "Descarte 2 cartões de energia de incêndio ligados a gyarados brilhantes ou este ataque não faz nada. Este ataque causa 10 danos a Pokémon com bancada do seu oponente. (Não aplique fraqueza e resistência a Pokemon em bancada.) Em seguida, vire uma moeda. Se as cabeças, escolha 1 cartão de energia anexado a cada um dos Pokémon do seu oponente que possui qualquer cartão de energia anexado a ele e descarte esses cartões de energia.",
          },
          damage: 50,
        },
      ],

      retreat: 3,

};
