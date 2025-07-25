import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Lanturn",
         ja: "ラントン",
         fr: "Chanteur",
         de: "Lanturn",
         es: "Lanturn",
         it: "Lanturn",
         pt: "Lanturn",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [171],
      hp: 70,
      types: ["Lightning"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Hydroelectric Power",
            ja: "水力発電",
            fr: "Puissance hydroélectrique",
            de: "Wasserkraft",
            es: "Energía hidroeléctrica",
            it: "Potenza idroelettrica",
            pt: "Potência hidrelétrica",
          },
          effect: {
            en: "You may make Floodlight do 10 more damage for each Water Energy attached to Lanturn but not used to pay for Floodlight's Energy cost. This power can't be used if Lanturn is Asleep, Confused, or Paralyzed.",
            ja: "Lanturnに付着した水エネルギーごとにFloodlightに10回のダメージを与えるが、Floodlightのエネルギーコストの支払いには使用されない場合があります。 Lanturnが眠ったり、混乱したり、麻痺している場合、この力は使用できません。",
            fr: "Vous pouvez faire en sorte que les projecteurs font 10 dommages supplémentaires pour chaque énergie d'eau attachée à Lanturn, mais pas utilisés pour payer le coût de l'énergie de Floodlight. Ce pouvoir ne peut pas être utilisé si Lanturn est endormi, confus ou paralysé.",
            de: "Sie können das Flutlicht für jede an Lanturn angeschlossene Wasserergie anrichten, aber nicht zur Bezahlung der Energiekosten von Floodlight verwendet werden. Diese Kraft kann nicht verwendet werden, wenn Lanturn schläft, verwirrt oder gelähmt ist.",
            es: "Puede hacer que Floodlight haga 10 daños más por cada energía de agua unida a Lanturn, pero no se usa para pagar el costo de energía de Floodlight. Este poder no se puede usar si Lanturn está dormido, confundido o paralizado.",
            it: "Puoi fare in modo che i proiettori fanno altri 10 danni per ogni energia idrica attaccata a Lanturn ma non sia abituato a pagare per il costo energetico del proiettore. Questo potere non può essere usato se Lanturn è addormentato, confuso o paralizzato.",
            pt: "Você pode fazer com que o holofote cause mais 10 danos a cada energia da água anexada a Lanturn, mas não costumava pagar pelo custo de energia do Filhlight. Esse poder não pode ser usado se Lanturn estiver dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning", "Lightning"],
          name: {
            en: "Floodlight",
            ja: "投光照明",
            fr: "Projecteur",
            de: "Scheinwerfer",
            es: "Foco",
            it: "Proiettore",
            pt: "Iluminação",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
          damage: 20,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
