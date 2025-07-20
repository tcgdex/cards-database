import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Omanyte",
         ja: "オマニテ",
         fr: "Omanyte",
         de: "Omanyte",
         es: "Omanyte",
         it: "Omanyte",
         pt: "Omanyte",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [138],
      hp: 50,
      types: ["Fighting"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Revive Fossil",
            ja: "化石を復活させます",
            fr: "Revivre le fossile",
            de: "Fossil wiederbeleben",
            es: "Revivir fósil",
            it: "Rivivi fossili",
            pt: "Revive fóssil",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may flip a coin. If heads, search your deck for a card that evolves from Mysterious Fossil and put it on your Bench. Shuffle your deck afterward. Treat that card as a Basic Pokmon. This power can't be used if Omanyte is Asleep, Confused, or Paralyzed <em>(or if your Bench is full)</em>.",
            ja: "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭の場合は、神秘的な化石から進化するカードをデッキに検索し、ベンチに置いてください。その後、デッキをシャッフルします。そのカードを基本的なポクモンとして扱います。 Omanyteが眠っている、混乱している、または麻痺した<em>（またはベンチがいっぱいの場合）</em>である場合、このパワーは使用できません</em>。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez retourner une pièce. Si les têtes, recherchez votre jeu une carte qui évolue à partir de mystérieuses fossiles et mettez-la sur votre banc. Mélanger votre deck par la suite. Traitez cette carte comme un pokmon de base. Ce pouvoir ne peut pas être utilisé si Omanyte est endormi, confus ou paralysé <em> (ou si votre banc est plein) </em>.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> sind, können Sie eine Münze umdrehen. Wenn Sie Köpfe sind, suchen Sie Ihr Deck nach einer Karte, die sich vom mysteriösen Fossil entwickelt, und legen Sie es auf Ihre Bank. Mischen Sie anschließend Ihr Deck. Behandle diese Karte als Basis -Pokmon. Diese Kraft kann nicht verwendet werden, wenn Omanyte schläft, verwirrt oder gelähmt ist (oder wenn Ihre Bank voll ist) </em>.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede voltear una moneda. Si se dirige, busque en su mazo una carta que evolucione del misterioso fósil y la ponga en su banco. Baraja tu mazo después. Trate esa tarjeta como un Pokmon básico. Este poder no se puede usar si Omanyte está dormido, confundido o paralizado <em> (o si su banco está lleno) </em>.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi capovolgere una moneta. Se la testa, cerca nel tuo mazzo una carta che si evolve da misteriosi fossili e mettila in panchina. Shuffle il tuo mazzo in seguito. Tratta quella carta come un Pokmon di base. Questo potere non può essere usato se Omanyte è addormentato, confuso o paralizzato <em> (o se la panca è piena) </em>.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode virar uma moeda. Se as cabeças, procure seu baralho por uma carta que evolui de fósseis misteriosos e coloque -o em seu banco. Afaste seu baralho depois. Trate esse cartão como um Pokmon básico. Esse poder não pode ser usado se Omanyte estiver dormindo, confuso ou paralisado <em> (ou se o seu banco estiver cheio) </em>.",
          },
      }],

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Bind",
            ja: "バインド",
            fr: "Lier",
            de: "Binden",
            es: "Unir",
            it: "Legamento",
            pt: "Vincular",
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
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
