import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Shining Kabutops",
         ja: "輝くカブトップ",
         fr: "Kabutops brillants",
         de: "Leuchtende Kabutops",
         es: "Kabutops brillantes",
         it: "Kabutops splendente",
         pt: "Kabutops brilhantes",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [141],
      hp: 80,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting", "Fighting", "Lightning"],
          name: {
            en: "Lightning Cut",
            ja: "稲妻カット",
            fr: "Coup de foudre",
            de: "Blitzschnitt",
            es: "Lightning Cut",
            it: "Fulmine",
            pt: "Corte de raios",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage and does 10 damage to each of your opponent's Benched Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.) If tails, this attack does 30 damage and Shining Kabutops does 10 damage to itself.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は30ダメージに加えて10ダメージを与え、相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）尾の場合、この攻撃は30のダメージを与え、輝くカブトップはそれ自体に10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires et fait 10 dégâts à chacun des pokemon bancés de votre adversaire. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.) Si Tails, cette attaque fait 30 dégâts et brillant Kabutops fait 10 dégâts à lui-même.",
            de: "Eine Münze drehen. Wenn dieser Angriff 30 Schäden plus 10 weitere Schäden ansetzt und 10 Schäden an den Bankpokémon Ihres Gegners schaden. (Wenden Sie keine Schwäche und Widerstand für Bank -Pokémon an.) Wenn Schwänze 30 Schaden anrichten und Kabutops leuchtet, schädigt sich 10 Schaden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 30 daños más 10 daños más y hace 10 daños a cada Pokémon de banca de tu oponente. (No aplique debilidad y resistencia para los Pokémon de banca). Si las colas, este ataque hace 30 daños y Kabutops brillantes hace 10 daños a sí mismo.",
            it: "Capovolgi una moneta. Se le teste, questo attacco infligge 30 danni più 10 danni in più e infligge 10 danni a ciascuno dei Pokemon in panchina del tuo avversario. (Non applicare la debolezza e la resistenza per i Pokemon in panchina.) Se le code, questo attacco infligge 30 danni e i kabutops splendenti fa 10 danni a se stesso.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causarão 30 danos mais 10 danos e causam 10 danos a cada um dos Pokémon bancos do seu oponente. (Não aplique fraqueza e resistência a Pokemon em bancada.) Se as caudas, esse ataque causam 30 danos e os Kabutops brilhantes causam 10 danos a si mesmos.",
          },
        },
        {
          cost: ["Fighting", "Fighting", "Water", "Water"],
          name: {
            en: "Water Slash",
            ja: "ウォータースラッシュ",
            fr: "Baisse de l'eau",
            de: "Wasserstrahl",
            es: "Barra de agua",
            it: "Tash d'acqua",
            pt: "Barra de água",
          },
          effect: {
            en: "Does 50 damage plus 10 more damage for each Water Energy attached to Shining Kabutops but not used to pay for this attack's Energy cost. Don't apply Resistance.",
            ja: "50のダメージに加えて、輝くカブトップに付着した水エネルギーごとにさらに10ダメージを与えますが、この攻撃のエネルギーコストの支払いには使用されません。抵抗を適用しないでください。",
            fr: "Fait 50 dégâts plus 10 dommages supplémentaires pour chaque énergie d'eau attachée à des kabutops brillants, mais pas utilisés pour payer le coût énergétique de cette attaque. N'appliquez pas la résistance.",
            de: "Fügt 50 Schäden plus 10 weitere Schäden für jede Wasserergie, die an leuchtenden Kabutops angeschlossen ist, aber nicht zur Bezahlung der Energiekosten dieses Angriffs verwendet wird. Wenden Sie keinen Widerstand an.",
            es: "Hace 50 daños más 10 daños más por cada energía de agua unida a Kabutops brillantes, pero no se usa para pagar el costo de energía de este ataque. No aplique resistencia.",
            it: "Fa 50 danni più 10 danni per ogni energia idrica attaccata a Kabutops brillante ma non è usato per pagare il costo energetico di questo attacco. Non applicare resistenza.",
            pt: "Causam 50 danos mais 10 mais danos para cada energia da água ligada a kabutops brilhantes, mas não é usado para pagar pelo custo de energia desse ataque. Não aplique resistência.",
          },
        },
      ],

      retreat: 2,

};
