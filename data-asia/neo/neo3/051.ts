import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Porygon2",
         ja: "Porygon2",
         fr: "Porygon2",
         de: "PoryGon2",
         es: "Porygon2",
         it: "Porygon2",
         pt: "Porygon2",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [233],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Energy Converter",
            ja: "エネルギーコンバーター",
            fr: "Convertisseur d'énergie",
            de: "Energiewandler",
            es: "Convertidor de energía",
            it: "Convertitore di energia",
            pt: "Conversor de energia",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may choose 1 basic Energy card attached to 1 of your Pokémon and choose an Energy type. Treat that Energy card as that type until the end of your turn. This power can't be used if Porygon2 is Asleep, Confused, or Paralyzed. If Porygon2 becomes Asleep, Confused, or Paralyzed, the Energy card goes back to its original type.",
            ja: "ターン中に（攻撃の前）</em> </em>、ポケモンの1つに1つの基本エネルギーカードを選択し、エネルギータイプを選択できます。そのエネルギーカードをターンの終わりまでそのタイプとして扱います。 Porygon2が眠ったり、混乱したり、麻痺している場合、このパワーは使用できません。 Porygon2が眠り、混乱、または麻痺した場合、エネルギーカードは元のタイプに戻ります。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez choisir 1 carte d'énergie de base attachée à 1 de votre Pokémon et choisir un type d'énergie. Traitez cette carte d'énergie comme ce type jusqu'à la fin de votre tour. Ce pouvoir ne peut pas être utilisé si Porygon2 est endormi, confus ou paralysé. Si Porygon2 endorme, confus ou paralysé, la carte d'énergie remonte à son type d'origine.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> sind, können Sie 1 grundlegende Energiekarte auswählen, die an 1 Ihres Pokémon angeschlossen ist und einen Energietyp auswählen. Behandeln Sie diese Energiekarte bis zum Ende Ihres Zuges als diesen Typ. Diese Kraft kann nicht verwendet werden, wenn PoryGon2 schläft, verwirrt oder gelähmt ist. Wenn PoryGon2 schläft, verwirrt oder gelähmt ist, geht die Energiekarte auf ihren ursprünglichen Typ zurück.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede elegir 1 tarjeta de energía básica unida a 1 de sus Pokémon y elegir un tipo de energía. Trate esa tarjeta de energía como ese tipo hasta el final de su turno. Este poder no se puede usar si Porygon2 está dormido, confundido o paralizado. Si Porygon2 se duerme, confunde o se paraliza, la tarjeta de energía se remonta a su tipo original.",
            it: "Una volta durante il tuo turno <em> (prima dell'attacco) </em>, puoi scegliere 1 carta di energia di base collegata a 1 dei tuoi Pokémon e scegliere un tipo di energia. Tratta quella carta energetica come quel tipo fino alla fine del tuo turno. Questo potere non può essere usato se Porygon2 è addormentato, confuso o paralizzato. Se Porygon2 si addormenta, confuso o paralizzato, la scheda energetica risale al suo tipo originale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode escolher 1 cartão de energia básico conectado a 1 do seu Pokémon e escolher um tipo de energia. Trate esse cartão de energia como esse tipo até o final da sua vez. Esse poder não pode ser usado se o Porygon2 estiver dormindo, confuso ou paralisado. Se o Porygon2 ficar dormindo, confuso ou paralisado, o cartão de energia remonta ao seu tipo original.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Delta Beam",
            ja: "デルタビーム",
            fr: "Delta poutre",
            de: "Delta Strahl",
            es: "Haz delta",
            it: "Delta Beam",
            pt: "Feixe delta",
          },
          effect: {
            en: "Flip a coin. If heads, choose whether the Defending Pokemon becomes Asleep, Confused, or Paralyzed.",
            ja: "コインをひっくり返します。頭の場合は、防御するポケモンが眠っているか、混乱したり、麻痺したりするかどうかを選択します。",
            fr: "Retourner une pièce. Si les têtes, choisissez si le Pokémon en défense endorme, confus ou paralysé.",
            de: "Eine Münze drehen. Wenn Köpfe, wählen Sie, ob das verteidigende Pokémon schläft, verwirrt oder gelähmt ist.",
            es: "Voltea una moneda. Si se dirige, elija si el Pokémon defensor se duerme, confunde o se paraliza.",
            it: "Capovolgi una moneta. Se le teste, scegli se il Pokemon in difesa si addormenta, confuso o paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, escolha se o pokemon defensor fica dormindo, confuso ou paralisado.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
      ],
};
